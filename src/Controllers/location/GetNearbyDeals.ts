import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

/**
 * Calculate distance between two points using Haversine formula
 * @param lat1 Latitude of first point
 * @param lng1 Longitude of first point
 * @param lat2 Latitude of second point
 * @param lng2 Longitude of second point
 * @returns Distance in kilometers
 */
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const GetNearbyDeals = async (req: Request, res: Response) => {
    try {
        const {
            latitude,
            longitude,
            radius = 10, // Default radius: 10km
            limit = 20,
            page = 1,
            dealType = 'all', // 'flyers', 'coupons', or 'all'
            categoryId,
            sortBy = 'distance' // 'distance', 'expiry', 'discount'
        } = req.query;

        // Validate required parameters
        if (!latitude || !longitude) {
            res.status(400).json({
                message: "Latitude and longitude are required"
            });
            return;
        }

        // Parse parameters
        const lat = parseFloat(latitude as string);
        const lng = parseFloat(longitude as string);
        const maxRadius = parseFloat(radius as string);
        const pageNumber = parseInt(page as string) || 1;
        const limitNumber = parseInt(limit as string) || 20;
        const skip = (pageNumber - 1) * limitNumber;

        // Current date for active deals filtering
        const now = new Date();

        // Array to store all deals (flyers and coupons)
        let combinedDeals: any[] = [];

        // Query for getting stores in range
        // Note: We'll filter by distance later
        const storeQuery = {
            where: {
                latitude: { not: null },
                longitude: { not: null },
                ...(categoryId ? {
                    categories: {
                        some: {
                            id: categoryId as string
                        }
                    }
                } : {})
            }
        };

        // Get all stores with coordinates
        const stores = await prisma.store.findMany(storeQuery);

        // Filter stores by distance
        const nearbyStoreIds = stores
            .filter(store => {
                if (!store.latitude || !store.longitude) return false;

                const distance = calculateDistance(
                    lat,
                    lng,
                    store.latitude,
                    store.longitude
                );

                return distance <= maxRadius;
            })
            .map(store => ({
                id: store.id,
                distance: calculateDistance(
                    lat,
                    lng,
                    store.latitude as number,
                    store.longitude as number
                )
            }));

        // Create a map for quick lookup of distances
        const storeDistanceMap = new Map(
            nearbyStoreIds.map(store => [store.id, store.distance])
        );

        // If no nearby stores found, return empty results
        if (nearbyStoreIds.length === 0) {
            res.status(200).json({
                deals: [],
                pagination: {
                    total: 0,
                    page: pageNumber,
                    limit: limitNumber,
                    totalPages: 0,
                    hasNextPage: false,
                    hasPreviousPage: false
                }
            });
            return;
        }

        // Get flyers from nearby stores if requested
        if (dealType === 'all' || dealType === 'flyers') {
            const flyers = await prisma.flyer.findMany({
                where: {
                    storeId: {
                        in: nearbyStoreIds.map(store => store.id)
                    },
                    endDate: {
                        gte: now
                    },
                    ...(categoryId ? {
                        categories: {
                            some: {
                                id: categoryId as string
                            }
                        }
                    } : {})
                },
                include: {
                    store: true,
                    categories: true,
                    items: {
                        take: 5 // Limit number of items to reduce payload size
                    }
                }
            });

            // Enhance flyers with distance and type
            const processedFlyers = flyers.map(flyer => ({
                ...flyer,
                distance: storeDistanceMap.get(flyer.storeId) || 0,
                dealType: 'flyer'
            }));

            combinedDeals = [...combinedDeals, ...processedFlyers];
        }

        // Get coupons from nearby stores if requested
        if (dealType === 'all' || dealType === 'coupons') {
            const coupons = await prisma.coupon.findMany({
                where: {
                    storeId: {
                        in: nearbyStoreIds.map(store => store.id)
                    },
                    endDate: {
                        gte: now
                    },
                    ...(categoryId ? {
                        categories: {
                            some: {
                                id: categoryId as string
                            }
                        }
                    } : {})
                },
                include: {
                    store: true,
                    categories: true
                }
            });

            // Enhance coupons with distance and type
            const processedCoupons = coupons.map(coupon => ({
                ...coupon,
                distance: storeDistanceMap.get(coupon.storeId) || 0,
                dealType: 'coupon'
            }));

            combinedDeals = [...combinedDeals, ...processedCoupons];
        }

        // Sort deals based on sortBy parameter
        switch (sortBy) {
            case 'distance':
                combinedDeals.sort((a, b) => a.distance - b.distance);
                break;
            case 'expiry':
                combinedDeals.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
                break;
            case 'discount':
                // For discount sorting, we'll need to extract numerical values
                // This is a simplified approach - you may need to adjust based on your data format
                combinedDeals.sort((a, b) => {
                    // For flyers, use the highest discount from items
                    if (a.dealType === 'flyer' && b.dealType === 'flyer') {
                        const aDiscount = a.items.length > 0 ?
                            Math.max(...a.items
                                .filter((item: any) => item.oldPrice && item.price)
                                .map((item: any) => (item.oldPrice - item.price) / item.oldPrice * 100)
                            ) : 0;
                        const bDiscount = b.items.length > 0 ?
                            Math.max(...b.items
                                .filter((item: any) => item.oldPrice && item.price)
                                .map((item: any) => (item.oldPrice - item.price) / item.oldPrice * 100)
                            ) : 0;
                        return bDiscount - aDiscount; // Higher discount first
                    }
                    // For coupons, try to extract numerical value from discount field
                    if (a.dealType === 'coupon' && b.dealType === 'coupon') {
                        const aValue = parseFloat(a.discount.replace(/[^0-9.]/g, '')) || 0;
                        const bValue = parseFloat(b.discount.replace(/[^0-9.]/g, '')) || 0;
                        return bValue - aValue; // Higher discount first
                    }
                    // Mixed types - prioritize based on type
                    return a.dealType === 'coupon' ? -1 : 1;
                });
                break;
            default:
                combinedDeals.sort((a, b) => a.distance - b.distance);
        }

        // Apply pagination
        const totalCount = combinedDeals.length;
        const totalPages = Math.ceil(totalCount / limitNumber);
        const paginatedDeals = combinedDeals.slice(skip, skip + limitNumber);

        res.status(200).json({
            deals: paginatedDeals,
            pagination: {
                total: totalCount,
                page: pageNumber,
                limit: limitNumber,
                totalPages,
                hasNextPage: pageNumber < totalPages,
                hasPreviousPage: pageNumber > 1
            }
        });
        return;
    } catch (error) {
        console.error("Error finding nearby deals:", error);
        res.status(500).json({
            message: "An error occurred while finding nearby deals",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetNearbyDeals;
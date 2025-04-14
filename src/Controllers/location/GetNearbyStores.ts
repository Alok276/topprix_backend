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

const GetNearbyStores = async (req: Request, res: Response) => {
    try {
        const {
            latitude,
            longitude,
            radius = 10, // Default radius: 10km
            limit = 20,
            page = 1,
            categoryId,
            withActiveDeals
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

        // Build base query
        let storeQuery: any = {
            where: {
                latitude: { not: null },
                longitude: { not: null }
            },
            include: {
                categories: true,
                _count: {
                    select: {
                        flyers: {
                            where: {
                                endDate: {
                                    gte: new Date() // Only count active flyers
                                }
                            }
                        },
                        coupons: {
                            where: {
                                endDate: {
                                    gte: new Date() // Only count active coupons
                                }
                            }
                        }
                    }
                }
            }
        };

        // Add category filter if specified
        if (categoryId) {
            storeQuery.where.categories = {
                some: {
                    id: categoryId as string
                }
            };
        }

        // Add active deals filter if specified
        if (withActiveDeals === 'true') {
            storeQuery.where.OR = [
                {
                    flyers: {
                        some: {
                            endDate: {
                                gte: new Date()
                            }
                        }
                    }
                },
                {
                    coupons: {
                        some: {
                            endDate: {
                                gte: new Date()
                            }
                        }
                    }
                }
            ];
        }

        // Get all stores with coordinates
        const stores = await prisma.store.findMany(storeQuery);

        // Filter and calculate distance for each store
        const storesWithDistance = stores
            .map(store => {
                // Skip stores without coordinates
                if (store.latitude === null || store.longitude === null) {
                    return null;
                }

                // Calculate distance
                const distance = calculateDistance(
                    lat,
                    lng,
                    store.latitude,
                    store.longitude
                );

                // Only include stores within the radius
                if (distance <= maxRadius) {
                    return {
                        ...store,
                        distance: parseFloat(distance.toFixed(2)) // Round to 2 decimal places
                    };
                }
                return null;
            })
            .filter(store => store !== null) as (any[]);

        // Sort by distance
        storesWithDistance.sort((a, b) => a.distance - b.distance);

        // Apply pagination
        const totalCount = storesWithDistance.length;
        const totalPages = Math.ceil(totalCount / limitNumber);
        const skip = (pageNumber - 1) * limitNumber;
        const paginatedStores = storesWithDistance.slice(skip, skip + limitNumber);

        res.status(200).json({
            stores: paginatedStores,
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
        console.error("Error finding nearby stores:", error);
        res.status(500).json({
            message: "An error occurred while finding nearby stores",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetNearbyStores;
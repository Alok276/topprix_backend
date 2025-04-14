import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetStoresFilters = async (req: Request, res: Response) => {
    try {
        const {
            search,
            categoryId,
            categoryIds,
            limit = 20,
            page = 1,
            latitude,
            longitude,
            radius
        } = req.query;

        // Parse pagination parameters
        const pageNumber = parseInt(page as string) || 1;
        const limitNumber = parseInt(limit as string) || 20;
        const skip = (pageNumber - 1) * limitNumber;

        // Build filter conditions
        const whereConditions: any = {};

        // Text search on name or description
        if (search) {
            whereConditions.OR = [
                { name: { contains: search as string, mode: 'insensitive' } },
                { description: { contains: search as string, mode: 'insensitive' } }
            ];
        }

        // Handle category filtering
        if (categoryIds) {
            // Parse the comma-separated category IDs
            let catIds: string[] = [];

            if (typeof categoryIds === 'string') {
                catIds = categoryIds.split(',');
            } else if (Array.isArray(categoryIds)) {
                catIds = categoryIds as string[];
            }

            if (catIds.length > 0) {
                // Each store must have ALL specified categories
                whereConditions.AND = catIds.map(id => ({
                    categories: {
                        some: {
                            id: id
                        }
                    }
                }));
            }
        } else if (categoryId) {
            // For backward compatibility - single category filter
            whereConditions.categories = {
                some: {
                    id: categoryId as string
                }
            };
        }

        // Get stores
        const stores = await prisma.store.findMany({
            where: whereConditions,
            include: {
                categories: true,
                _count: {
                    select: {
                        flyers: true,
                        coupons: true
                    }
                }
            },
            skip,
            take: limitNumber,
            orderBy: {
                name: 'asc'
            }
        });

        // If location coordinates are provided, calculate distance and filter by proximity
        if (latitude && longitude) {
            const lat = parseFloat(latitude as string);
            const lng = parseFloat(longitude as string);
            const maxRadius = parseFloat(radius as string) || 50; // Default 50km radius

            // Process stores with distance calculation
            const storesWithDistance = [];

            for (const store of stores) {
                // Skip stores without coordinates
                if (!store.latitude || !store.longitude) {
                    continue;
                }

                // Calculate distance using Haversine formula
                const storeLat = store.latitude;
                const storeLng = store.longitude;
                const R = 6371; // Earth's radius in km
                const dLat = (storeLat - lat) * Math.PI / 180;
                const dLng = (storeLng - lng) * Math.PI / 180;
                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat * Math.PI / 180) * Math.cos(storeLat * Math.PI / 180) *
                    Math.sin(dLng / 2) * Math.sin(dLng / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c;

                // Only include stores within the radius
                if (distance <= maxRadius) {
                    storesWithDistance.push({
                        ...store,
                        distance
                    });
                }
            }

            // Sort by distance
            storesWithDistance.sort((a, b) => a.distance - b.distance);

            // Send response with distance-filtered stores
            res.status(200).json({
                totalCount: storesWithDistance.length,
                currentPage: pageNumber,
                totalPages: Math.ceil(storesWithDistance.length / limitNumber),
                stores: storesWithDistance
            });
            return;
        }

        // Get total count for pagination (without location filtering)
        const totalCount = await prisma.store.count({
            where: whereConditions
        });

        // Send response without distance filtering
        res.status(200).json({
            totalCount,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalCount / limitNumber),
            stores
        });
        return;
    } catch (error) {
        console.error("Error retrieving stores:", error);
        res.status(500).json({
            message: "An error occurred while retrieving stores",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetStoresFilters;
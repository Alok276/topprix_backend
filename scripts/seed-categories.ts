import { PrismaClient } from "../prisma/generated/prisma";

const prisma = new PrismaClient();

async function main() {
    console.log('Starting to seed categories...');

    // Define categories to seed
    const categories = [
        {
            name: "Groceries",
            description: "Food and household items"
        },
        {
            name: "Electronics",
            description: "Computers, phones, and accessories"
        },
        {
            name: "Fashion",
            description: "Clothing, shoes, and accessories"
        },
        {
            name: "Home & Living",
            description: "Furniture, decor, and home improvement"
        },
        {
            name: "Beauty & Health",
            description: "Personal care, cosmetics, and wellness products"
        },
        {
            name: "Sports & Outdoors",
            description: "Athletic gear, camping, and outdoor equipment"
        }
    ];

    // Create each category if it doesn't already exist
    const results: Array<{ id: string; name: string; description: string | null; createdAt: Date; updatedAt: Date }> = [];

    for (const category of categories) {
        // Check if category already exists
        const existing = await prisma.category.findUnique({
            where: { name: category.name }
        });

        if (existing) {
            console.log(`Category "${category.name}" already exists with ID: ${existing.id}`);
            results.push(existing);
        } else {
            // Create new category
            const newCategory = await prisma.category.create({
                data: category
            });
            console.log(`Created category "${newCategory.name}" with ID: ${newCategory.id}`);
            results.push(newCategory);
        }
    }

    console.log('\nSummary of available categories:');
    console.table(results.map(c => ({ id: c.id, name: c.name })));

    console.log('\nUse these category IDs when creating stores.');
}

main()
    .catch((e) => {
        console.error('Error seeding categories:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
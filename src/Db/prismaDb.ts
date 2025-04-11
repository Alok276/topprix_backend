import { PrismaClient } from "../../prisma/generated/prisma";

export const prisma = new PrismaClient()


async function checkDatabaseConnection() {
    try {
      await prisma.$connect();
      console.log("Database connected successfully.");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }

checkDatabaseConnection();
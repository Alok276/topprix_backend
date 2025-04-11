import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const RegisterUser = async (req: Request, res: Response) => {
    const { username, email, location, role } = req.body;

    const user = await prisma.user.create({
        data: {
            name: username,
            email: email,
            role: role,
            createdAt: new Date(),
            location: location,
        },
    })

    res.status(201).json({ message: "User registered successfully", user });

}

export default RegisterUser;
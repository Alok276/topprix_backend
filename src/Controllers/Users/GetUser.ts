import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";



const GetUser = async (req: Request, res: Response) => {

    const { email } = req.params;
    if (!email) {
        res.status(400).send({ message: "Email parameter is required" });
        return;
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });


    if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
    }

    res.status(200).send(user);
}
export default GetUser;
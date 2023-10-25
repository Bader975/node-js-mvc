import { prisma } from "../config/db";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import axios from "axios";

// Creat 

export const main = async (req: Request, res: Response) => {

    try {
        const carts = await axios.get("https://dummyjson.com/carts")

        const cartsData = await carts?.data?.carts[0].products;
        res.render('index', { cartsData });

    } catch (error) {
        console.log(error);

    }


}

export const newLogin = async (req: Request, res: Response) => {

    res.render('login', { msg: "Hello" })

}




// Loging

export const Login = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user || (!await argon2.verify(user.password, req.body.password))) {
            console.log("wrong email or password");
            res.send("wrong email or password");
            
        }
        else {
            let token = jwt.sign(
                {
                    id: user?.id,
                    name: user?.name,
                },
                process.env.MY_SECRETKEY as string,
                { expiresIn: "3h" }
            );

            res
                .status(200)
                .send({
                    message: `اهلا وسهلا بك ${user?.name} `,
                    token: token,
                });
        }
    } catch (error) {
        console.log(error);
    }

}

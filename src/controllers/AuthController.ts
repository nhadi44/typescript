import { Request, Response} from "express";
const db = require("../db/models");
import PasswordHash from "../utils/PasswordHash";

class AuthController{
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password} = req.body;

        const hashPassword: string = await PasswordHash.hash(password);

        await db.users.create({username,password: hashPassword});

        return res.send("Data created successfully!!")
    }

    login(req: Request, res: Response): Response{
        return res.send("")
    }
}

export default new AuthController();
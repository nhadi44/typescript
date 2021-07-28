import {Router, Request, Response} from "express";
import { UserRoute } from "./UserInterfaces";

// Controller
import UserController from "../controllers/UserController";

class RouteUser implements UserRoute{
    public router: Router;

    constructor(){
        this.router = Router();
        this.routers();
    }

    public routers(): void{
        this.router.get("/", UserController.index)

        this.router.post("/", UserController.create)
    }
}

export default new RouteUser().router;
import { Router } from "express"
import { MhsRoute } from "./MhsInterfaces"

abstract class BaseRouter implements MhsRoute {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routers();
    }

    abstract routers(): void;

}

export default BaseRouter;
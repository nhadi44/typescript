import BaseRouter from "./BaseRoute";
import validate from "../middleware/AuthValidator";
// Controller
import AuthController from "../controllers/AuthController";

class AuthRouter extends BaseRouter{

    public routers(): void{
        this.router.post("/register",validate, AuthController.register);
        this.router.post("/login", AuthController.login);
    }
}

export default new AuthRouter().router;
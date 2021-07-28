import e, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { config as dotenv } from "dotenv";

// Router
import RouteUser from "./src/routers/UserRoute"
import MhsRoute from "./src/routers/MhsRoute";
import AuthRoute from "./src/routers/AuthRoute";


class App{
    public app: Application;

    constructor(){
        this.app = e();
        this.plugin();
        this.routes();
        dotenv();
    }

    protected plugin():void{
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
    }

    protected routes():void{
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("Router index Typescripts");
        })

        this.app.use("/user",RouteUser);

        this.app.use("/api/v1/mhs", MhsRoute);
        this.app.use("/api/v1/auth", AuthRoute);
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server runing on port " + port);

    // console.log(process.env.DB_USER)
})
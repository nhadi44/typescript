import BaseRouter from "./BaseRoute";
import { auth } from "../middleware/AauthMiddleware";
// Controller
import MhsController from "../controllers/MhsController";

class MhsRouter extends BaseRouter{

    public routers(): void{
        // Menampilkan seluruh data
        this.router.get("/",auth, MhsController.index);
        // Membuat Data Baru
        this.router.post("/", MhsController.create);
        // Mengambil satu data dari user
        this.router.get("/:id", MhsController.show);
        // Update data 
        this.router.put("/:id", MhsController.update);
        // Delete data
        this.router.delete("/:id", MhsController.delete);
    }
}

export default new MhsRouter().router;
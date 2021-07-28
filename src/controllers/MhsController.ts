import {Request, Response} from "express"
import IController from "./IController"


let data: any[] = [
    {id: 1, name: "Hadi Nurhidayat"},
    {id: 2, name: "Regina Wardani"},
    {id: 3, name: "Apap"},
    {id: 4, name: "Udin Subagja"},
    {id: 5, name: "Layla"},
]

class MhsController implements IController{
    index(req: Request, res: Response): Response{
        return res.send(data);
    }

    create(req: Request, res: Response): Response{
        const {id , name} = req.body;

        data.push({
            id,name
        });

        return res.send("Create Data Successfuly");
    }

    show(req: Request, res: Response): Response{
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req: Request, res: Response): Response{
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("Update Data Successfuly");
    }

    delete(req: Request, res: Response): Response{
        const { id } = req.params;

        let person = data.filter(item => item.id != id);
        return res.send(person);
    }
}

export default new MhsController();
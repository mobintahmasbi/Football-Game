import { Response, Request } from "express";

export default (req: Request, res: Response, next) =>{
    res.status(404).send("youre request is invalid")
}
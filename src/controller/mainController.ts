import { Request, Response } from "express";

export function showGame(req: Request, res: Response){
    res.send("hello world!");
}
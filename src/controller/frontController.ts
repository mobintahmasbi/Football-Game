import { Request, Response } from "express";

export function renderLandingPage(req: Request, res: Response){
    res.render("index.ejs")
}
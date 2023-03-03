import { Request, Response } from "express";
import Player from '../models/Player';
import PlayerRepository from "../Repository/PlayerRepository";

const playersRepo = new PlayerRepository();
export async function showGame(req: Request, res: Response){
    try {
        const players = await playersRepo.getAll();
        res.json(players);
    }catch (err) {
        console.log(err.message);
        res.status(500).send("sorry we have an issue please try later");
    }

}
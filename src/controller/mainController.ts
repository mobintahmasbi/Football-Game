import { Request, Response } from "express";
import Player from '../models/Player';
import PlayerRepository from "../Repository/PlayerRepository";

const playersRepo = new PlayerRepository();
export async function getAllPlayers(req: Request, res: Response){
    try {
        const players = await playersRepo.getAll();
        res.json(players);
    }catch (err) {
        console.log(err.message);
        res.status(500).send("sorry we have an issue please try later");
    }

}

export async function getOnePlayer(req: Request, res: Response){
    try {

        const player = await playersRepo.getById(parseInt(req.params.id));
        if(!player){
            res.status(404).send("the id is not available")
        }
        res.json(player);

    }catch (err) {

        console.log(err.message);
        res.status(500).send("sorry we have an issue in getOnePlayer please try later");
    
    }

}
import { Router } from "express";
import { getAllPlayers, getOnePlayer, createPlayer, updatePlayer, deletePlayer } from '../controller/mainController';

const mainRouter = Router();

mainRouter.get("/", getAllPlayers);
mainRouter.get("/:id", getOnePlayer);
mainRouter.post("/", createPlayer);
mainRouter.put("/:id", updatePlayer)
mainRouter.delete("/:id", deletePlayer);

export default mainRouter

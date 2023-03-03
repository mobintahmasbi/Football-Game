import { Router } from "express";
import { getAllPlayers, getOnePlayer } from '../controller/mainController';

const mainRouter = Router();

mainRouter.get("/", getAllPlayers);
mainRouter.get("/:id", getOnePlayer)

export default mainRouter

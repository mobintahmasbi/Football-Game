import { Router } from "express";
import { showGame } from '../controller/mainController';

const mainRouter = Router();

mainRouter.get("/", showGame)

export default mainRouter

import { Router } from "express";
import { renderLandingPage } from "../controller/frontController";
const frontRoutes = Router();

frontRoutes.get("/", renderLandingPage)



export default frontRoutes
import { Router } from "express";
import { songController } from "../controllers/song.controller";

const songRouter = Router();

songRouter.get("/", songController.getSongs);

export { songRouter };

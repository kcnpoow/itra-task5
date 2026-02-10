import type { NextFunction, Request, Response } from "express";
import { songService } from "../services/song.service";

class SongController {
  getSongs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const seed = Number(req.query.seed);
      const page = Number(req.query.page);

      const songs = songService.getSongs(seed, page);

      return res.status(200).json(songs);
    } catch (error) {
      return next(error);
    }
  };
}

export const songController = new SongController();

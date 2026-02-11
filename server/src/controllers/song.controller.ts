import type { NextFunction, Request, Response } from "express";
import { songService } from "../services/song.service";
import type { Locale } from "../types/locale";

class SongController {
  getSongs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const locale = req.query.locale as Locale;
      const page = Number(req.query.page);
      const seed = req.query.seed as string;

      const songs = songService.getSongs(locale, page, seed);

      return res.status(200).json(songs);
    } catch (error) {
      return next(error);
    }
  };
}

export const songController = new SongController();

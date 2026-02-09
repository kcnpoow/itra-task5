import type { NextFunction, Request, Response } from "express";

class SongController {
  getSongs = async (req: Request, res: Response, next: NextFunction) => {
    try {

      
      return res.status(200).json({});
    } catch (error) {}
  };
}

export const songController = new SongController();

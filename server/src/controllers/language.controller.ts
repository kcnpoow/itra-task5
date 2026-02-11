import type { NextFunction, Request, Response } from "express";

import { FAKER_LOCALES } from "../consts/faker-locales";

class LanguageController {
  getLanguages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const locales = Object.keys(FAKER_LOCALES);

      return res.status(200).json({ locales });
    } catch (error) {
      return next(error);
    }
  };
}

export const languageController = new LanguageController();

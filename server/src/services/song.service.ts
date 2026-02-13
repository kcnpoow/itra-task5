import type { Song } from "../models/song";
import { ApiError } from "../errors/api.error";
import { songMaker } from "../lib/song-maker";
import { PAGE_SIZE } from "../consts/page-size";
import type { Locale } from "../types/locale";

class SongService {
  getSongs = (
    locale: Locale,
    page: number,
    seed: string,
    likes: number,
  ): Song[] => {
    if (!locale) {
      throw ApiError.BadRequest("Invalid locale");
    }

    if (!seed) {
      throw ApiError.BadRequest("Invalid seed");
    }

    if (typeof page !== "number" || isNaN(page)) {
      throw ApiError.BadRequest("Invalid page");
    }

    if (typeof likes !== "number" || isNaN(likes)) {
      throw ApiError.BadRequest("Invalid likes");
    }

    const songs = songMaker.generateSongs(locale, page, seed, likes, PAGE_SIZE);

    return songs;
  };
}

export const songService = new SongService();

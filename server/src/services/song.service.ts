import type { Song } from "../models/song";
import { ApiError } from "../errors/api.error";
import { getCombinedSeed } from "../lib/combine-seed";
import { songMaker } from "../lib/song-maker";
import { PAGE_SIZE } from "../consts/page-size";
import type { Locale } from "../types/locale";

class SongService {
  getSongs = (locale: Locale, page: number, seed: string): Song[] => {
    if (!locale) {
      throw ApiError.BadRequest("Invalid locale");
    }

    if (!seed) {
      throw ApiError.BadRequest("Invalid seed");
    }

    if (!page || typeof page !== "number" || isNaN(page)) {
      throw ApiError.BadRequest("Invalid page");
    }

    const combinedSeed = getCombinedSeed(locale, page, seed);

    const songs = songMaker.generateSongs(
      locale,
      page,
      combinedSeed,
      PAGE_SIZE,
    );

    return songs;
  };
}

export const songService = new SongService();

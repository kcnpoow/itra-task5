import type { Song } from "../models/song";
import { ApiError } from "../errors/api.error";
import { getCombinedSeed } from "../lib/combine-seed";
import { songMaker } from "../lib/song-maker";

class SongService {
  private cache = new Map();

  getSongs = async (seed: number, page: number): Promise<Song[]> => {
    if (typeof seed !== "number") {
      throw ApiError.BadRequest("Invalid seed");
    }

    if (typeof page !== "number") {
      throw ApiError.BadRequest("Invalid page");
    }

    const combinedSeed = getCombinedSeed(seed, page);

    const cachedSongs = this.cache.get(combinedSeed);
    if (cachedSongs) {
      return cachedSongs;
    }

    await songMaker.createSong(seed, "electronic");

    return [];
  };
}

export const songService = new SongService();

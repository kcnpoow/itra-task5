import { pool } from "../config/db";
import { ApiError } from "../errors/api.error";
import type { Song } from "../models/song";

class SongService {
  getSongs = async (page: number, limit: number): Promise<Song[]> => {
    if (typeof page !== "number" || typeof limit !== "number") {
      throw ApiError.BadRequest("Invalid parameters");
    }

    const offset = (page - 1) * limit;

    const result = await pool.query<Song>(
      `
      SELECT *
      FROM songs
      ORDER BY id DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset],
    );

    const songs = result.rows;

    return songs;
  };
}

export const songService = new SongService();

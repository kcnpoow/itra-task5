import { en, Faker } from "@faker-js/faker";
import crypto from "crypto";

import type { Song } from "../models/song";
import type { Locale } from "../types/locale";
import { FAKER_LOCALES } from "../consts/faker-locales";

class SongMaker {
  public generateSongs = (
    locale: Locale,
    page: number,
    seed: string,
    avgLikes: number,
    amount: number,
  ): Song[] => {
    const result: Song[] = [];

    const faker = new Faker({ locale: [FAKER_LOCALES[locale], en] });

    for (let i = 0; i < amount; i++) {
      const id = amount * (page - 1) + (i + 1);

      const contentSeed = this.generateContentSeed(id, locale, page, seed);
      faker.seed(contentSeed);

      const likesSeed = this.generateLikesSeed(contentSeed);
      const likes = this.generateLikes(likesSeed, avgLikes);

      const song: Song = {
        id,
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        genre: faker.music.genre(),
        likes,
        coverUrl: faker.image.urlPicsumPhotos(),
      };

      result.push(song);
    }

    return result;
  };

  private generateLikes = (seed: number, avgLikes: number) => {
    const base = Math.floor(avgLikes);
    const frac = avgLikes - base;

    const normalized = seed / 2 ** 32;

    return base + (normalized < frac ? 1 : 0);
  };

  private generateContentSeed = (
    id: number,
    locale: Locale,
    page: number,
    seed: string,
  ): number => {
    const combined = `content_${id}_${locale}_${page}_${seed}`;

    const hash = crypto.createHash("sha256");
    hash.update(combined);

    return hash.digest().readUInt32BE(0);
  };

  private generateLikesSeed = (contentSeed: number): number => {
    const combined = `likes_${contentSeed}`;

    const hash = crypto.createHash("sha256");
    hash.update(combined);

    return hash.digest().readUInt32BE(0);
  };
}

export const songMaker = new SongMaker();

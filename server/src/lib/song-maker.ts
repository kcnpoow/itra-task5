import { base, en, Faker } from "@faker-js/faker";

import type { Song } from "../models/song";
import type { Locale } from "../types/locale";
import { FAKER_LOCALES } from "../consts/faker-locales";

class SongMaker {
  public generateSongs = (
    locale: Locale,
    page: number,
    seed: number,
    amount: number,
  ): Song[] => {
    const result: Song[] = [];

    const faker = new Faker({ locale: [FAKER_LOCALES[locale], en, base] });

    faker.seed(seed);

    for (let i = 0; i < amount; i++) {
      const id = amount * (page - 1) + (i + 1);

      const song: Song = {
        id,
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        genre: faker.music.genre(),
        coverUrl: faker.image.urlPicsumPhotos({ width: 1000, height: 1000 }),
      };

      result.push(song);
    }

    return result;
  };
}

export const songMaker = new SongMaker();

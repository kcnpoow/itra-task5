import type { MusicDefinition, LocaleDefinition } from "@faker-js/faker";

import songName from "./song-name";
import genre from "./genre";
import artist from "./artist";
import album from "./album";

const music: MusicDefinition = {
  album: album,
  artist: artist,
  genre: genre,
  song_name: songName,
};

export const ru: LocaleDefinition = {
  music,
};

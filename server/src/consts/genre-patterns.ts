import { type Genre } from "../types/genre";
import { type GenrePattern } from "../types/song";

export const GENRE_PATTERNS: Record<Genre, GenrePattern> = {
  rock: {
    bpm: 120,
    scale: ["C4", "D4", "E4", "G4", "A4"],
    drums: ["kick", "snare", "kick", "snare"],
    chords: [
      ["C4", "G4"],
      ["F4", "A4"],
      ["G4", "B4"],
      ["C4", "E4"],
    ],
  },
  jazz: {
    bpm: 90,
    scale: ["C4", "D4", "Eb4", "F4", "G4", "Bb4"],
    drums: ["kick", "hh", "snare", "hh"],
    chords: [["Cmaj7"], ["Dm7"], ["G7"], ["Fmaj7"]],
  },
  electronic: {
    bpm: 128,
    scale: ["C4", "E4", "G4", "A4", "B4"],
    drums: ["kick", "kick", "snare", "kick"],
    chords: [
      ["C4", "E4", "G4"],
      ["A4", "C5", "E5"],
      ["G4", "B4", "D5"],
      ["F4", "A4", "C5"],
    ],
  },
  pop: {
    bpm: 100,
    scale: ["C4", "D4", "E4", "F4", "G4", "A4"],
    drums: ["kick", "snare", "kick", "snare"],
    chords: [
      ["C4", "G4"],
      ["Am", "F"],
      ["G", "C"],
      ["F", "G"],
    ],
  },
  funk: {
    bpm: 110,
    scale: ["C4", "D4", "E4", "F4", "G4", "A4", "Bb4"],
    drums: ["kick", "hh", "snare", "hh", "kick", "hh", "snare", "hh"],
    chords: [["C7"], ["F7"], ["G7"], ["Bb7"]],
  },
  hiphop: {
    bpm: 85,
    scale: ["C3", "D3", "E3", "F3", "G3", "A3", "Bb3"],
    drums: ["kick", "kick", "snare", "kick"],
    chords: [["Cmin7"], ["Dmin7"], ["G7"], ["F7"]],
  },
};

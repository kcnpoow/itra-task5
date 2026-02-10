import random, { Random } from "random";
import { AudioContext, OfflineAudioContext } from "node-web-audio-api";

import * as Tone from "tone";

import { GENRE_PATTERNS } from "../consts/genre-patterns";
import type { Genre } from "../types/genre";

class SongMaker {
  public createSong = async (seed: number, genre: Genre) => {
    Tone.getTransport().start();

    // const { bpm, scale, drums, chords } = GENRE_PATTERNS[genre];
    // const rng = random.clone(seed.toString());
    // const melody = this.generateMelody(rng, scale, 16);
    // const chordProgression = this.generateChords(rng, chords, 4);
    // const duration = (4 * 4 * 60) / bpm;
    // const sampleRate = 44100;
    // const offlineCtx = new OfflineAudioContext(
    //   2,
    //   sampleRate * duration,
    //   sampleRate,
    // );
    // Tone.setContext(new Tone.Context(offlineCtx));
    // const destination = new Tone.Gain().toDestination();
    // const synth = new Tone.Synth().connect(destination);
    // const chordSynth = new Tone.PolySynth(Tone.Synth).connect(destination);
    // const drumSynth = new Tone.MembraneSynth().connect(destination);
    // const seqMelody = new Tone.Sequence(
    //   (time, note) => {
    //     synth.triggerAttackRelease(note, "8n", time);
    //   },
    //   melody,
    //   "8n",
    // );
    // const seqChords = new Tone.Sequence(
    //   (time, chord) => {
    //     chordSynth.triggerAttackRelease(chord, "1n", time);
    //   },
    //   chordProgression,
    //   "1n",
    // );
    // const seqDrums = new Tone.Sequence(
    //   (time, drum) => {
    //     if (drum === "kick") drumSynth.triggerAttackRelease("C2", "8n", time);
    //     if (drum === "snare") drumSynth.triggerAttackRelease("D2", "8n", time);
    //     if (drum === "hh") drumSynth.triggerAttackRelease("E2", "16n", time);
    //   },
    //   drums,
    //   "8n",
    // );
    // Tone.getTransport().bpm.value = bpm;
    // Tone.getTransport().start();
    // seqMelody.start(0);
    // seqChords.start(0);
    // seqDrums.start(0);
    // Tone.getTransport().stop();
    // const renderedBuffer = await offlineCtx.startRendering();
    // console.log(renderedBuffer);
  };

  private generateMelody = (
    rng: Random,
    scale: string[],
    length: number = 16,
  ): string[] => {
    const result: string[] = [];
    for (let i = 0; i < length; i++) {
      const index = rng.int(0, scale.length - 1);
      result.push(scale[index]!);
    }
    return result;
  };

  private generateChords = (
    rng: Random,
    chords: string[][],
    length: number = 4,
  ): string[][] => {
    const result: string[][] = [];
    for (let i = 0; i < length; i++) {
      const index = rng.int(0, chords.length - 1);
      result.push(chords[index]!);
    }
    return result;
  };
}

export const songMaker = new SongMaker();

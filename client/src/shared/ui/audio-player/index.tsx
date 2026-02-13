import { useEffect, useRef, useState } from "react";
import { intervalToDuration } from "date-fns";
import { PauseIcon, PlayIcon } from "lucide-react";

import { VolumeControl } from "./volume-control";
import { Slider } from "@/shared/shadcn/components/ui/slider";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Badge } from "@/shared/shadcn/components/ui/badge";

interface Props {
  pause?: boolean;
}

export const AudioPlayer = ({ pause }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [time, setTime] = useState(0);
  const [leftTime, setLeftTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  const withAudio = (fn: (a: HTMLAudioElement) => void) => {
    const audio = audioRef.current;

    if (audio) {
      fn(audio);
    }
  };

  const handleTimeChangeStart = () =>
    withAudio((audio) => {
      audio.pause();

      setIsPlaying(false);
    });

  const handleTimeChange = (value: number[]) =>
    withAudio((audio) => {
      const newTime = value[0];

      audio.currentTime = (newTime / 100) * audio.duration;

      setTime(newTime);
    });

  const handleTimeChangeEnd = () =>
    withAudio(async (audio) => {
      await audio.play();

      setIsPlaying(true);
    });

  const handleToggle = () =>
    withAudio(async (audio) => {
      if (audio.paused) {
        await audio.play();

        setIsPlaying(true);
      } else {
        audio.pause();

        setIsPlaying(false);
      }
    });

  const setupAudioListeners = () => {
    withAudio((audio) => {
      setLeftTime(audio.duration);

      const handleTimeUpdate = () => {
        const progress = (audio.currentTime / audio.duration) * 100;

        setTime(progress);
        setLeftTime(audio.duration - audio.currentTime);
      };

      const handleEnded = () => {
        setIsPlaying(false);
      };

      audio.volume = volume;

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
    });
  };

  const handleVolumeChange = (value: number[]) =>
    withAudio((audio) => {
      const newVolume = value[0];

      audio.volume = newVolume;
      setVolume(newVolume);
    });

  const formatZero = (number: number | undefined) => {
    return String(number ?? 0).padStart(2, "0");
  };

  useEffect(
    () =>
      withAudio((audio) => {
        {
          if (pause) {
            audio.pause();

            setIsPlaying(false);
          }
        }
      }),
    [pause],
  );

  const duration = intervalToDuration({
    start: 0,
    end: leftTime * 1000,
  });

  const formattedDuration = `${formatZero(duration.minutes)}:${formatZero(duration.seconds)}`;

  return (
    <div className="flex gap-2 max-w-sm">
      <audio
        ref={audioRef}
        src="/song-placeholder.mp3"
        onLoadedMetadata={setupAudioListeners}
      />

      <Button className="rounded-full" size="icon-xs" onClick={handleToggle}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>

      <VolumeControl volume={[volume]} onVolumeChange={handleVolumeChange} />

      <Slider
        className="**:data-[slot='slider-track']:bg-neutral-300"
        value={[time]}
        onPointerDown={handleTimeChangeStart}
        onValueChange={handleTimeChange}
        onValueCommit={handleTimeChangeEnd}
      />

      <Badge className="w-14 bg-white" variant="outline">
        {formattedDuration}
      </Badge>
    </div>
  );
};

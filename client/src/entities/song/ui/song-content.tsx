import { ThumbsUpIcon } from "lucide-react";

import { type Song } from "../model";
import { Badge } from "@/shared/shadcn/components/ui/badge";
import { AudioPlayer } from "@/shared/ui/audio-player";

interface Props {
  song: Song;
  open?: boolean;
}

export const SongContent = ({ song, open }: Props) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <div
          className="size-32 bg-muted-foreground bg-cover bg-center rounded-sm"
          style={{ backgroundImage: `url(${song.coverUrl})` }}
        />

        <Badge>
          {song.likes} <ThumbsUpIcon />
        </Badge>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h6 className="text-lg font-semibold">{song.title}</h6>

        <p className="font-semibold">
          <span className="text-gray-400">from</span> <span>{song.album}</span>{" "}
          <span className="text-gray-400">by</span> <span>{song.artist}</span>
        </p>

        <AudioPlayer pause={!open} />
      </div>
    </div>
  );
};

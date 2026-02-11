import type { Song } from "../model";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";
import { SongContent } from "./song-content";

interface Props {
  song: Song;
}

export const SongCard = ({ song }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="transition-all origin-center transform-gpu hover:bg-primary/20 hover:scale-105 active:bg-primary/20 active:scale-105">
          <CardHeader>
            <DialogTitle asChild>
              <CardTitle className="truncate text-base md:text-lg">
                {song.title}
              </CardTitle>
            </DialogTitle>
          </CardHeader>

          <CardContent className="overflow-hidden text-sm md:text-base">
            <p className="truncate">{song.artist}</p>
            <p className="truncate">{song.album}</p>
            <p className="truncate">{song.genre}</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <SongContent song={song} />
      </DialogContent>
    </Dialog>
  );
};

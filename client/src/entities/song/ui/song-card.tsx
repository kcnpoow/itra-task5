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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";

interface Props {
  song: Song;
}

export const SongCard = ({ song }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="transition-all origin-center transform-gpu hover:bg-primary/20 hover:scale-105 active:bg-primary/20 active:scale-105">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">{song.title}</CardTitle>

            <CardContent className="overflow-hidden p-0 text-sm md:text-base">
              <p className="truncate">{song.artist}</p>
              <p className="truncate">{song.album}</p>
              <p className="truncate">{song.genre}</p>
            </CardContent>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{song.title}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

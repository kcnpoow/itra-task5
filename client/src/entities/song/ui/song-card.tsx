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
import { Badge } from "@/shared/shadcn/components/ui/badge";
import { ThumbsUpIcon } from "lucide-react";

interface Props {
  song: Song;
}

export const SongCard = ({ song }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="transition-all origin-center transform-gpu hover:bg-primary/20 hover:scale-102 active:bg-primary/20 active:scale-102">
          <CardHeader>
            <DialogTitle asChild>
              <CardTitle className="truncate">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="truncate">{song.title}</div>{" "}
                  <Badge>
                    {song.likes} <ThumbsUpIcon />
                  </Badge>
                </div>
                <div className="text-secondary-foreground text-base truncate font-normal">
                  {song.artist}: {song.album}
                </div>
              </CardTitle>
            </DialogTitle>
          </CardHeader>

          <CardContent className="overflow-hidden">
            <p className="text-muted-foreground text-sm truncate">
              {song.genre}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <SongContent song={song} />
      </DialogContent>
    </Dialog>
  );
};

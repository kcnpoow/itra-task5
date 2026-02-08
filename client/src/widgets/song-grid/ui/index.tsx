import { SongCard, type Song } from "@/entities/song";

interface Props {
  data: Song[];
}

export const SongGrid = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8">
      {data.map((song) => (
        <SongCard song={song} />
      ))}
    </div>
  );
};

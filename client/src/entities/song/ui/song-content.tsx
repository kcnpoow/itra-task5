import { type Song } from "../model";

interface Props {
  song: Song;
}

export const SongContent = ({ song }: Props) => {
  return (
    <div className="flex gap-6">
      <div>
        <img
          className="max-h-12"
          src={song.coverUrl}
          alt={song.album}
          width={100}
          height={100}
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h6 className="text-lg font-semibold">{song.title}</h6>

        <p className="font-semibold">
          <span className="text-gray-400">from</span> <span>{song.album}</span>{" "}
          <span className="text-gray-400">by</span> <span>{song.artist}</span>
        </p>
      </div>
    </div>
  );
};

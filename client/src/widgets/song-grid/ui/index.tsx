import { useInfiniteQuery } from "@tanstack/react-query";

import { songApi, SongCard } from "@/entities/song";
import { InfiniteScroll } from "@/shared/ui/infinite-scroll";

interface Props {
  locale: string;
  seed: string;
  likes: number;
}

export const SongGrid = ({ locale, seed, likes }: Props) => {
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["songs", locale, seed, likes],
    initialPageParam: 1,
    enabled: Boolean(seed),
    queryFn: ({ pageParam }) =>
      songApi.getSongs(locale, pageParam, seed, likes),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  const handleNext = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-8 mt-4">
        {data?.pages.flat().map((song) => (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        ))}
      </ul>

      <InfiniteScroll onNext={handleNext} />
    </div>
  );
};

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

import { songApi, SongCard } from "@/entities/song";
import { InfiniteScroll } from "@/shared/ui/infinite-scroll";
import { useEffect } from "react";

interface Props {
  locale: string;
  seed: string;
  likes: number;
}

export const SongGrid = ({ locale, seed, likes }: Props) => {
  const queryClient = useQueryClient();

  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["songs", "grid", locale, seed, likes],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      songApi.getSongs(locale, pageParam, seed, likes),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  const handleNext = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: ["songs", "grid", locale, seed, likes],
      });
    };
  }, [locale, seed, likes, queryClient]);

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

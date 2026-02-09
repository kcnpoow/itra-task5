import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { SongList } from "@/widgets/song-list";
import { SongGrid } from "@/widgets/song-grid";
import { LanguageSelect } from "@/features/language";
import { SeedInput } from "@/features/seed";
import { LikesSlider } from "@/features/like-slider";
import { songApi, SongViewToggler, type SongViewMode } from "@/entities/song";

export const Home = () => {
  const [viewMode, setViewMode] = useState<SongViewMode>("list");
  const [cursor, setCursor] = useState<string | null>(null);

  const { data } = useQuery({
    queryKey: ["songs", cursor],
    queryFn: async () => await songApi.getPagedSongs("cursor"),
    initialData: { items: [], prevCursor: null, nextCursor: null },
  });

  const onNext = () => {
    setCursor(data.nextCursor);
  };

  const onPrev = () => {
    setCursor(data.prevCursor);
  };

  return (
    <div className="container py-4">
      <div
        className={clsx(
          "flex items-center gap-4 p-4 bg-neutral-50",
          viewMode === "grid" && "mb-4",
        )}
      >
        <LanguageSelect />

        <SeedInput />

        <LikesSlider />

        <SongViewToggler
          className="ml-auto"
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {viewMode === "list" ? (
        <SongList data={data.items} />
      ) : viewMode === "grid" ? (
        <SongGrid data={data.items} />
      ) : null}
    </div>
  );
};

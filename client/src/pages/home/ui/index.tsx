import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { SongList } from "@/widgets/song-list";
import { SongGrid } from "@/widgets/song-grid";
import { LanguageSelect } from "@/features/language-select";
import { SeedInput } from "@/features/seed-input";
import { LikesSlider } from "@/features/like-slider";
import { AppPagination } from "@/features/app-pagination";
import { songApi, SongViewToggler, type SongViewMode } from "@/entities/song";

export const Home = () => {
  const [seed, setSeed] = useState("");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<SongViewMode>("list");

  const { data } = useQuery({
    queryKey: ["songs", seed, page],
    queryFn: async () => await songApi.getSongs(seed, page),
    initialData: [],
  });

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
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

        <SeedInput seed={seed} setSeed={setSeed} />

        <LikesSlider />

        <SongViewToggler
          className="ml-auto"
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {viewMode === "list" ? (
        <>
          <SongList data={data} />

          <AppPagination
            className="mt-4"
            page={page}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </>
      ) : viewMode === "grid" ? (
        <SongGrid data={data} />
      ) : null}
    </div>
  );
};

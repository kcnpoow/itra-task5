import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { SongList } from "@/widgets/song-list";
import { SongGrid } from "@/widgets/song-grid";
import { LanguageSelect } from "@/features/language-select";
import { SeedInput } from "@/features/seed-input";
import { LikesSlider } from "@/features/like-slider";
import { AppPagination } from "@/features/app-pagination";
import { songApi, SongViewToggler, type SongViewMode } from "@/entities/song";
import { useDebounce } from "@/shared/hooks/use-debounce";

export const Home = () => {
  const [locale, setLocale] = useState("en");
  const [seed, setSeed] = useState("");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<SongViewMode>("list");

  const debouncedSeed = useDebounce(seed);

  const { data } = useQuery({
    queryKey: ["songs", page, debouncedSeed],
    queryFn: () => songApi.getSongs("ru", page, debouncedSeed),
    initialData: [],
    enabled: Boolean(debouncedSeed),
  });

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [debouncedSeed]);

  return (
    <div className="container py-4">
      <div className="flex items-center gap-4 p-4 bg-neutral-50">
        <LanguageSelect />

        <SeedInput seed={seed} setSeed={setSeed} />

        <LikesSlider />

        <SongViewToggler
          className="ml-auto"
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {debouncedSeed ? (
        <>
          {viewMode === "list" && (
            <>
              <SongList data={data} />

              <AppPagination
                className="mt-4"
                page={page}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </>
          )}

          {viewMode === "grid" && <SongGrid data={data} />}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          Type seed to see results
        </div>
      )}
    </div>
  );
};

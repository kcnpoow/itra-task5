import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SongList } from "@/widgets/song-list";
import { SongGrid } from "@/widgets/song-grid";
import { LanguageSelect } from "@/features/language-select";
import { ViewModeToggler, type ViewMode } from "@/features/view-mode-toggler";
import { SeedInput } from "@/features/seed-input";
import { LikesSlider } from "@/features/like-slider";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useQueryClient } from "@tanstack/react-query";

export const Home = () => {
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");
  const [seed, setSeed] = useState("");
  const [likes, setLikes] = useState([0]);
  const [viewMode, setViewMode] = useState<ViewMode>(
    (localStorage.getItem("viewMode") as ViewMode) || "list",
  );

  const debouncedSeed = useDebounce(seed);

  const handleLocaleChange = (value: string) => {
    setLocale(value);

    i18n.changeLanguage(value);

    localStorage.setItem("locale", value);
  };

  const handleSeedChange = (value: string) => {
    setSeed(value);
  };

  const handleLikesChange = (value: number[]) => {
    setLikes(value);
  };

  const handleViewModeChange = (value: ViewMode) => {
    setViewMode(value);

    localStorage.setItem("viewMode", value);
  };

  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["songs"] });
  }, [viewMode, queryClient]);

  return (
    <div className="container py-4">
      <div className="sticky top-0 z-50 flex flex-col md:flex-row items-center gap-4 p-4 bg-neutral-50">
        <LanguageSelect
          className="bg-white"
          label={t("controls.localeLabel")}
          value={locale}
          onValueChange={handleLocaleChange}
        />

        <SeedInput
          className="bg-white"
          label={t("controls.seedLabel")}
          value={seed}
          onValueChange={handleSeedChange}
        />

        <LikesSlider
          label={t("controls.likesLabel")}
          onValueCommit={handleLikesChange}
        />

        <ViewModeToggler
          value={viewMode}
          onValueChange={handleViewModeChange}
        />
      </div>

      {debouncedSeed ? (
        <>
          {viewMode === "list" && (
            <SongList locale={locale} seed={debouncedSeed} likes={likes[0]} />
          )}

          {viewMode === "grid" && (
            <SongGrid locale={locale} seed={debouncedSeed} likes={likes[0]} />
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          {t("enterSeedMessage")}
        </div>
      )}
    </div>
  );
};

import { useState } from "react";
import clsx from "clsx";

import { SongList } from "@/widgets/song-list";
import { SongGrid } from "@/widgets/song-grid";
import { LanguageSelect } from "@/features/language";
import { SeedInput } from "@/features/seed";
import { SongViewToggler, type SongViewMode } from "@/entities/song";

import { mockSongs } from "@/shared/tests/songs.test";

export const Home = () => {
  const [viewMode, setViewMode] = useState<SongViewMode>("list");

  const renderSongs = () => {
    switch (viewMode) {
      case "list":
        return <SongList data={mockSongs} />;
      case "grid":
        return <SongGrid data={mockSongs} />;
      default:
        return null;
    }
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

        <SeedInput className="max-w-xs" />

        <SongViewToggler
          className="ml-auto"
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {renderSongs()}
    </div>
  );
};

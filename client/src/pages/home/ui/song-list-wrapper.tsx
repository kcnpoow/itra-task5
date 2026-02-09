import { SongList } from "@/widgets/song-list";

import { AppPagination } from "@/features/app-pagination";

import { mockSongs } from "@/shared/tests/songs.test";

export const SongListWrapper = () => {
  

  return (
    <>
      <SongList data={mockSongs} />

      <AppPagination className="mt-4" />
    </>
  );
};

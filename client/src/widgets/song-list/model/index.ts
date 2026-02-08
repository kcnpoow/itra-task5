import { type ColumnDef } from "@tanstack/react-table";

import type { Song } from "@/entities/song";

export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "title",
    header: "Song",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "album",
    header: "Album",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
];

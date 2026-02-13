import { type ColumnDef } from "@tanstack/react-table";
import { type TFunction } from "i18next";

import type { Song } from "@/entities/song";

export const getColumns = (t: TFunction): ColumnDef<Song>[] => [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "title",
    header: t("row.titleLabel"),
  },
  {
    accessorKey: "artist",
    header: t("row.artistLabel"),
  },
  {
    accessorKey: "album",
    header: t("row.albumLabel"),
  },
  {
    accessorKey: "genre",
    header: t("row.genreLabel"),
  },
];

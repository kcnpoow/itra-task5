import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

import { Loader } from "./loader";
import { getColumns } from "../model";
import { AppPagination } from "@/features/app-pagination";
import { songApi, SongRow } from "@/entities/song";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/shadcn/components/ui/table";

interface Props {
  locale: string;
  seed: string;
  likes: number;
}

export const SongList = ({ locale, seed, likes }: Props) => {
  const [openSongId, setOpenSongId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const { t } = useTranslation();

  const { data, isFetching } = useQuery({
    queryKey: ["songs", locale, page, seed, likes],
    queryFn: () => songApi.getSongs(locale, page, seed, likes),
    initialData: [],
  });

  const table = useReactTable({
    data,
    columns: getColumns(t),
    getCoreRowModel: getCoreRowModel(),
  });

  const handleOpenChange = (songId: string | null) => {
    setOpenSongId(songId);
  };

  const handleNext = () => {
    setPage((previous) => previous + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((previous) => previous - 1);
    }
  };

  useEffect(() => {
    setOpenSongId(null);
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [locale, seed, likes]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <Table className="border">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <SongRow
                key={row.id}
                row={row}
                open={openSongId === row.id}
                onOpenChange={handleOpenChange}
              />
            ))}
          </TableBody>
        </Table>
      )}

      <AppPagination
        className="mt-4"
        page={page}
        onPrev={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns } from "../model";
import { SongRow, type Song } from "@/entities/song";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/shadcn/components/ui/table";
import { useState } from "react";

interface Props {
  data: Song[];
}

export const SongList = ({ data }: Props) => {
  const [openSongId, setOpenSongId] = useState<string | null>(null);

  const handleOpenChange = (songId: string) => {
    setOpenSongId(songId);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};

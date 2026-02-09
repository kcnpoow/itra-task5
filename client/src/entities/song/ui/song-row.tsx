import { flexRender, type Row } from "@tanstack/react-table";
import { motion } from "motion/react";

import type { Song } from "../model";
import { TableCell, TableRow } from "@/shared/shadcn/components/ui/table";
import clsx from "clsx";

interface Props {
  row: Row<Song>;
  open: boolean;
  onOpenChange: (songId: string | null) => void;
}

export const SongRow = ({ row, open, onOpenChange }: Props) => {
  const visibleCells = row.getVisibleCells();

  const handleClick = () => {
    if (open) {
      onOpenChange(null);
    } else {
      onOpenChange(row.id);
    }
  };

  return (
    <>
      <TableRow
        className={clsx(
          "border-0",
          open && "bg-primary/20 hover:bg-primary/20",
        )}
        data-state={row.getIsSelected() && "selected"}
        onClick={handleClick}
      >
        {visibleCells.map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>

      <tr className="border-b">
        <td colSpan={visibleCells.length}>
          <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{ height: open ? "auto" : 0 }}
          >
            <div className="h-100 p-2 bg-neutral-100">content</div>
          </motion.div>
        </td>
      </tr>
    </>
  );
};

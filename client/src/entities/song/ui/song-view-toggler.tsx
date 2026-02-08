import { Grid2x2, SquareChartGantt } from "lucide-react";
import clsx from "clsx";

import { type SongViewMode } from "../model";
import { Button } from "@/shared/shadcn/components/ui/button";
import { ButtonGroup } from "@/shared/shadcn/components/ui/button-group";

interface Props {
  className?: string;
  viewMode: SongViewMode;
  setViewMode: (mode: SongViewMode) => void;
}

export const SongViewToggler = ({
  className,
  viewMode,
  setViewMode,
}: Props) => {
  return (
    <ButtonGroup className={className}>
      <Button
        className="border border-primary"
        variant={viewMode === "list" ? "default" : "outline"}
        onClick={() => setViewMode("list")}
      >
        <Grid2x2 className={clsx(viewMode === "grid" && "text-primary")} />
      </Button>

      <Button
        className="border border-primary"
        variant={viewMode === "grid" ? "default" : "outline"}
        onClick={() => setViewMode("grid")}
      >
        <SquareChartGantt
          className={clsx(viewMode === "list" && "text-primary")}
        />
      </Button>
    </ButtonGroup>
  );
};

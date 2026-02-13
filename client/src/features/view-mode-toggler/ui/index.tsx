import { Grid2x2, SquareChartGantt } from "lucide-react";
import clsx from "clsx";

import { Button } from "@/shared/shadcn/components/ui/button";
import { ButtonGroup } from "@/shared/shadcn/components/ui/button-group";
import type { ViewMode } from "../model";

interface Props {
  className?: string;
  value: ViewMode;
  onValueChange: (mode: ViewMode) => void;
}

export const ViewModeToggler = ({ className, value, onValueChange }: Props) => {
  return (
    <ButtonGroup className={className}>
      <Button
        className="border border-primary"
        variant={value === "list" ? "default" : "outline"}
        onClick={() => onValueChange("list")}
      >
        <Grid2x2 className={clsx(value === "grid" && "text-primary")} />
      </Button>

      <Button
        className="border border-primary"
        variant={value === "grid" ? "default" : "outline"}
        onClick={() => onValueChange("grid")}
      >
        <SquareChartGantt
          className={clsx(value === "list" && "text-primary")}
        />
      </Button>
    </ButtonGroup>
  );
};

import type { ComponentPropsWithoutRef } from "react";

import { Slider } from "@/shared/shadcn/components/ui/slider";
import clsx from "clsx";

interface Props extends ComponentPropsWithoutRef<typeof Slider> {}

export const LikesSlider = ({ className, ...props }: Props) => {
  return (
    <Slider
      className={clsx("max-w-xs", className)}
      step={1}
      min={0}
      max={10}
      {...props}
    />
  );
};

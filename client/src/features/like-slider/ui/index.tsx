import { useState, type ComponentPropsWithoutRef } from "react";

import { Slider } from "@/shared/shadcn/components/ui/slider";
import { Label } from "@/shared/shadcn/components/ui/label";

interface Props extends ComponentPropsWithoutRef<typeof Slider> {
  label: string;
}

export const LikeSlider = ({ label, ...props }: Props) => {
  const [value, setValue] = useState([0]);

  const handleValueChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <div className="relative w-full max-w-xs">
      <Label className="-mt-2 mb-2 text-xs text-muted-foreground">
        {label} ({value[0]})
      </Label>

      <Slider
        className="**:data-[slot='slider-range']:bg-transparent"
        step={0.1}
        min={0}
        max={10}
        onValueChange={handleValueChange}
        {...props}
      />
    </div>
  );
};

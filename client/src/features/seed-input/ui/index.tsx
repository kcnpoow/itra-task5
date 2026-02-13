import { type ChangeEvent, type ComponentPropsWithoutRef } from "react";
import { ShuffleIcon } from "lucide-react";
import clsx from "clsx";

import { generateSeed } from "../lib";
import { FloatingLabelInput } from "@/shared/ui/floating-label-input";
import { Button } from "@/shared/shadcn/components/ui/button";
import { SEED_LENGTH } from "@/shared/consts/seed-length";

interface Props extends Omit<
  ComponentPropsWithoutRef<typeof FloatingLabelInput>,
  "onChange"
> {
  onValueChange: (value: string) => void;
}

export const SeedInput = ({ className, onValueChange, ...props }: Props) => {
  const handleGenerateSeed = () => {
    const seed = generateSeed(SEED_LENGTH).toString();

    onValueChange(seed);
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const seed = event.target.value;

    if (seed.length > SEED_LENGTH) {
      return;
    }

    onValueChange(seed);
  };

  return (
    <FloatingLabelInput
      className={clsx("max-w-xs", className)}
      addon={
        <Button size="icon-sm" variant="ghost" onClick={handleGenerateSeed}>
          <ShuffleIcon />
        </Button>
      }
      onChange={handleValueChange}
      {...props}
    />
  );
};

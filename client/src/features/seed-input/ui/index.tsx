import { type ChangeEvent, type ComponentPropsWithoutRef } from "react";
import { ShuffleIcon } from "lucide-react";
import clsx from "clsx";

import { generateSeed } from "../lib";
import { FloatingLabelInput } from "@/shared/ui/floating-label-input";
import { Button } from "@/shared/shadcn/components/ui/button";
import { SEED_LENGTH } from "@/shared/consts/seed-length";
import { formatNumber } from "@/shared/lib/format-number";

interface Props extends Omit<
  ComponentPropsWithoutRef<typeof FloatingLabelInput>,
  "onChange"
> {
  seed: string;
  setSeed: (value: string) => void;
}

export const SeedInput = ({ className, seed, setSeed, ...props }: Props) => {
  const handleSeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const seed = formatNumber(event.target.value);

    if (seed.length > SEED_LENGTH) {
      return;
    }

    setSeed(seed);
  };

  const handleGenerateSeed = () => {
    const seed = generateSeed(SEED_LENGTH).toString();

    setSeed(seed);
  };

  return (
    <FloatingLabelInput
      className={clsx("max-w-xs", className)}
      label="Seed"
      addon={
        <Button size="icon-sm" variant="ghost" onClick={handleGenerateSeed}>
          <ShuffleIcon />
        </Button>
      }
      value={seed}
      onChange={handleSeedChange}
      {...props}
    />
  );
};

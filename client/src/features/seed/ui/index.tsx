import type { ComponentPropsWithoutRef } from "react";
import { Shuffle } from "lucide-react";
import clsx from "clsx";

import { FloatingLabelInput } from "@/shared/ui/floating-label-input";
import { Button } from "@/shared/shadcn/components/ui/button";

interface Props extends ComponentPropsWithoutRef<typeof FloatingLabelInput> {}

export const SeedInput = ({ className, ...props }: Props) => {
  return (
    <FloatingLabelInput
      className={clsx("max-w-xs", className)}
      label="Seed"
      addon={
        <Button size="icon-sm" variant="ghost">
          <Shuffle />
        </Button>
      }
      {...props}
    />
  );
};

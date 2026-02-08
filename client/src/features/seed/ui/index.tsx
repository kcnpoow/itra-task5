import type { ComponentPropsWithoutRef } from "react";
import { Shuffle } from "lucide-react";

import { FloatingLabelInput } from "@/shared/ui/floating-label-input";
import { Button } from "@/shared/shadcn/components/ui/button";

interface Props extends ComponentPropsWithoutRef<typeof FloatingLabelInput> {
  className?: string;
}

export const SeedInput = ({ ...props }: Props) => {
  return (
    <FloatingLabelInput
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

import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import clsx from "clsx";

import { Button } from "@/shared/shadcn/components/ui/button";
import { ButtonGroup } from "@/shared/shadcn/components/ui/button-group";

interface Props {
  className?: string;
  nextCursor: string | null;
  prevCursor: string | null;
}

export const AppPagination = ({ className, nextCursor, prevCursor }: Props) => {
  const handlePrevClick = () => {};

  const handleNextClick = () => {};

  return (
    <ButtonGroup
      className={clsx(
        "mx-auto border rounded-md [&>button]:not-last:border-r",
        className,
      )}
    >
      <Button
        className="text-primary hover:text-primary"
        variant="ghost"
        disabled={!prevCursor}
        onClick={handlePrevClick}
      >
        <ChevronsLeftIcon />
      </Button>

      <Button disabled>1</Button>

      <Button
        className="text-primary hover:text-primary"
        variant="ghost"
        disabled={!nextCursor}
        onClick={handleNextClick}
      >
        <ChevronsRightIcon />
      </Button>
    </ButtonGroup>
  );
};

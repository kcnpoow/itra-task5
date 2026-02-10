import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import clsx from "clsx";

import { Button } from "@/shared/shadcn/components/ui/button";
import { ButtonGroup } from "@/shared/shadcn/components/ui/button-group";

interface Props {
  className?: string;
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

export const AppPagination = ({ className, page, onPrev, onNext }: Props) => {
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <ButtonGroup
      className={clsx(
        "mx-auto border rounded-md [&>button]:not-last:border-r",
        className,
      )}
    >
      {prevPage > 0 && (
        <>
          <Button
            className="text-primary hover:text-primary"
            variant="ghost"
            onClick={onPrev}
          >
            <ChevronsLeftIcon />
          </Button>

          <Button
            className="text-primary hover:text-primary"
            variant="ghost"
            onClick={onPrev}
          >
            {prevPage}
          </Button>
        </>
      )}

      <Button
        className="transition-none transition-colors disabled:opacity-100"
        disabled
      >
        {page}
      </Button>

      <Button
        className="text-primary hover:text-primary"
        variant="ghost"
        onClick={onNext}
      >
        {nextPage}
      </Button>

      <Button
        className="text-primary hover:text-primary"
        variant="ghost"
        onClick={onNext}
      >
        <ChevronsRightIcon />
      </Button>
    </ButtonGroup>
  );
};

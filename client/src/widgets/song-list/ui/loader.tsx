import { Skeleton } from "@/shared/shadcn/components/ui/skeleton";

export const Loader = () => {
  return (
    <div className="flex flex-col justify-between h-[411px] *:data-[slot=skeleton]:h-8 py-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

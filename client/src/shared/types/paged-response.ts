export interface PagedResponse<TData> {
  items: TData[];
  nextCursor: string | null;
  prevCursor: string | null;
}

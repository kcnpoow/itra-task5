export const getCombinedSeed = (seed: number, page: number): number => {
  return page * 64 + seed;
};

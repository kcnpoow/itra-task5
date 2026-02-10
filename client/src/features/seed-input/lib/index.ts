export const generateSeed = (length: number): number => {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;

  const seed = Math.floor(min + Math.random() * (max - min + 1));

  return seed;
};

export const generateSeed = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let seed = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);

    seed += characters[index];
  }

  return seed;
};

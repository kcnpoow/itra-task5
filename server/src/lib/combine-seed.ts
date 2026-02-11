import crypto from "crypto";

import type { Locale } from "../types/locale";

export const getCombinedSeed = (
  locale: Locale,
  page: number,
  seed: string,
): number => {
  const combined = `${locale}_${page}_${seed}`;

  const hash = crypto.createHash("sha256");
  hash.update(combined);
  const result = hash.digest();

  return result.readUInt32BE(0);
};

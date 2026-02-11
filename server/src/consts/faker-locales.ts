import { type LocaleDefinition, allLocales } from "@faker-js/faker";

import type { Locale } from "../types/locale";

export const FAKER_LOCALES: Record<Locale, LocaleDefinition> = {
  ...allLocales,
};

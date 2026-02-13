import { type LocaleDefinition, en } from "@faker-js/faker";

import { ru } from "../lib/locales";
import type { Locale } from "../types/locale";

export const FAKER_LOCALES: Record<Locale, LocaleDefinition> = {
  ru,
  en,
};

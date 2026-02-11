import { api } from "@/shared/api/base";

class LanguageApi {
  getLanguages = async (): Promise<string[]> => {
    const response = await api.get<string[]>("/languages");

    return response.data;
  };
}

export const languageApi = new LanguageApi();

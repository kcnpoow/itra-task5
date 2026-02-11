import type { Song } from "../model";
import { api } from "@/shared/api/base";
import type { Locale } from "@/shared/store/locale-store";

class SongApi {
  getSongs = async (
    locale: Locale,
    page: number,
    seed: string,
  ): Promise<Song[]> => {
    const url = `/songs?locale=${locale}&page=${page}&seed=${seed}`;

    const response = await api.get<Song[]>(url);

    return response.data;
  };
}

export const songApi = new SongApi();

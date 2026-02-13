import type { Song } from "../model";
import { api } from "@/shared/api/base";

class SongApi {
  getSongs = async (
    locale: string,
    page: number,
    seed: string,
    likes: number,
  ): Promise<Song[]> => {
    const url = `/songs?locale=${locale}&page=${page}&seed=${seed}&likes=${likes}`;

    const response = await api.get<Song[]>(url);

    return response.data;
  };
}

export const songApi = new SongApi();

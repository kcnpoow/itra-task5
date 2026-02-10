import type { Song } from "../model";
import { api } from "@/shared/api/base";

class SongApi {
  getSongs = async (seed: string, page: number): Promise<Song[]> => {
    const url = `/songs?seed=${seed}&page=${page}`;

    const response = await api.get<Song[]>(url);

    console.log(response);

    return response.data;
  };
}

export const songApi = new SongApi();

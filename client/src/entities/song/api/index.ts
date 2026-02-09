import type { Song } from "../model";
import { api } from "@/shared/api";
import type { PagedResponse } from "@/shared/types/paged-response";

class SongApi {
  private readonly LIMIT = 10;

  getPagedSongs = async (cursor: string): Promise<PagedResponse<Song>> => {
    const url = `/songs?cursor=${cursor}&limit=${this.LIMIT}`;

    const response = await api.get<PagedResponse<Song>>(url);

    return response.data;
  };
}

export const songApi = new SongApi();

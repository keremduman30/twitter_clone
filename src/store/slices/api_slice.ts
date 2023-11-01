/* export const getTrendingVideos = createAsyncThunk(
  "fetch/trendingVideos",
  async () => {
    const res = await requestApi.get(
      `${GET_TRENDING_VIDEOS}?api_key=${import.meta.env.VITE_API_KEY}`
    );

    return res.data.results;
  }
); */

import { createSlice } from "@reduxjs/toolkit";

type TrendingVideosType = {
  backdrop_path: string;
  id?: number;
};
export type GenresByIdType = {
  id: number;
  poster_path: string;
  backdrop_path?: string;
  title?: string;
};

type ApiType = {
  loading: boolean;
  trendingVideos: TrendingVideosType[];
  genresByIdList: GenresByIdType[];
  error?: string;
};

const initialState: ApiType = {
  loading: false,
  trendingVideos: [],
  genresByIdList: [],
  error: "",
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: () => {},
});
// export const {  } = apiSlice.actions;
export default apiSlice.reducer;

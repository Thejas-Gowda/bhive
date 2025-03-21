import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main";
const DATA_URL = `${BASE_URL}/data.json`;

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(DATA_URL);
  const data = response.data;

  const updatedData = data.map((item: any) => ({
    ...item,
    imageUrl: `${BASE_URL}/static_assets/${item.image}`, 
  }));

  return updatedData;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
    error: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An unknown error occurred";
      });
  },
});

export default dataSlice.reducer;

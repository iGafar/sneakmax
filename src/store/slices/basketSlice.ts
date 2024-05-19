import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { ISneakers } from "../types";

export const fetchBasket = createAsyncThunk<ISneakers[]>(
  "basket/fetchBasket",
  async (): Promise<ISneakers[]> => {
    try {
      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/basket/`);

      return data;
    } catch (error) {
      console.log(`Failed to fetch:`);
      return [];
    }
  }
);

export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket",
  async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/basket`, item);

      return data;
    } catch (error) {
      throw new Error("Failed to post basket");
    }
  }
);

export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket",
  async (id) => {
    try {
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id;
    } catch (error) {
      throw new Error("Failed to delete basket");
    }
  }
);

interface IState {
  data: ISneakers[];
}

const initialState: IState = {
  data: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    //post
    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    //delete
    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
  },
});

export default basketSlice.reducer;

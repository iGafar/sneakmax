import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { ITeam } from "../types";

export const fetchTeam = createAsyncThunk<ITeam[]>(
  "team/fetchTeam",
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/team`);

      return data;
    } catch (error) {
      console.log(`Failed to fetch:`);
    }
  }
);

interface IState {
  data: ITeam[];
}

const initialState: IState = {
  data: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTeam.fulfilled,
      (state, action: PayloadAction<ITeam[]>) => {
        state.data = action.payload;
      }
    );
  },
});

export default teamSlice.reducer;

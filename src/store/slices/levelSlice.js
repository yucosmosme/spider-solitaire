import {createSlice} from "@reduxjs/toolkit";
import {EASY} from "constants/Level";

const initialState = {
  value: EASY,
};

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    setLevel(s, a) {
      s.value = a.payload;
    },
  },
});

export const {setLevel} = levelSlice.actions;

export default levelSlice;

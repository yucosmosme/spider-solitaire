import {createSlice} from "@reduxjs/toolkit";
import JHI from "assets/imgs/jhi.jpg";

const initialState = {
  value: JHI,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage(s, a) {
      s.value = a.payload;
    },
  },
});

export const {setImage} = imageSlice.actions;

export default imageSlice;

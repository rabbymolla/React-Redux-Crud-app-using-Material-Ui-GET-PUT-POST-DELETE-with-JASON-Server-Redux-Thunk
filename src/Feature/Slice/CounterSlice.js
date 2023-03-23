import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    LoginSlice: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value.pop(action.payload);
    },
  },
});
export const { LoginSlice, remove } = counterSlice.actions;
export default counterSlice.reducer;

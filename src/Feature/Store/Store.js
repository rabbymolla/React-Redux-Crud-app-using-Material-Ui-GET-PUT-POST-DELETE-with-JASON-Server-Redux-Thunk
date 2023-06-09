import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/CounterSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default Store;

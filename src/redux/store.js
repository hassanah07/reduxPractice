import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/slice/CartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { CartSlice }
  });
};

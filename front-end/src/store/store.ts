import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../store/currencySlice";
import cartReducer from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

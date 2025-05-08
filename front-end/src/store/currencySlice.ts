import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../types/types";

interface CurrencyState {
  currencyValue: Currency;
}

const storedCurrency = localStorage.getItem("selected_currency");

const initialState: CurrencyState = {
  currencyValue: (storedCurrency || "PLN") as Currency,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<Currency>) {
      state.currencyValue = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;

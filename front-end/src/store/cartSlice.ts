import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../types/types";

interface CartState {
  cartItems: ProductTypes[];
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("cart_products") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<ProductTypes>) {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart_products", JSON.stringify(state.cartItems));
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

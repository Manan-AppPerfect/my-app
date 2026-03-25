import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
    const existingItem = state.items.find(
      (item) => item.product.id === action.payload
    );

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload
        );
      }
    }

    // update total price
    state.totalPrice = state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
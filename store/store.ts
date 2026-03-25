import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const loadCart = () => {
  if (typeof window === "undefined") {
    return { items: [], totalPrice: 0 };
  }

  try {
    const data = localStorage.getItem("cart");

    if (!data) {
      return { items: [], totalPrice: 0 };
    }

    const parsed = JSON.parse(data);

    return {
      items: parsed.items ?? [],
      totalPrice: parsed.totalPrice ?? 0,
    };
  } catch {
    return { items: [], totalPrice: 0 };
  }
};

const saveCart = (state: RootState) => {
    if(typeof window === "undefined") return;

    localStorage.setItem("cart", JSON.stringify(state.cart));
}

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    },
    preloadedState: {
        cart: loadCart(),
    }
});

store.subscribe(() => {
    saveCart(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  catagory: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const isExist = state.products.find(
      //     (product) => product._id == action.payload._id
      // );
      // if (isExist) {
      //     console.log(isExist);
      //     isExist.quantity = isExist.quantity + 1;
      // } else {
      // }
      state.products.push(action.payload);
      state.catagory.push(action.payload.Category);
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id != action.payload._id
      );
    },
    clearCart: (state) => {
      state.products = [];
      state.catagory = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

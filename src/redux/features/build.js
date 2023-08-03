import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    catagory: []
};

const cartSlice = createSlice({
    name: 'cart',
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
            state.catagory.push(action.payload.catagory);
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id != action.payload._id
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

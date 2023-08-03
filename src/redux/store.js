import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/build'


const store = configureStore({
    reducer: {
        cart: cartSlice
    },

})


export default store;

import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./counter/couterSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer
    },

})
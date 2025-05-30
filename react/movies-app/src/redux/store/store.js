import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "../slices/myFavouritesSlice";

const store = configureStore({
    reducer: {
        myFavourites: favouritesSlice
    }
})

export default store;
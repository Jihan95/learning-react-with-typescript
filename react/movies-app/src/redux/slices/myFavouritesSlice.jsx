import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const favouritesSlice = createSlice({
    name: "myFavourites",
    initialState,
    reducers: {
        addtomyFavouritesAction: (state, action) => {
            state.value = [...state.value, action.payload]
        },

        removeFromFavouritesAction: (state, action) => {
            state.value = state.value.filter(movie => movie.id !== action.payload.id);
        }

    },
})

export const {addtomyFavouritesAction, removeFromFavouritesAction} = favouritesSlice.actions;
export default favouritesSlice.reducer;
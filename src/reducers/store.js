import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
import likedImagesReducer from "./likedImages";

export const store = configureStore ({
    reducer: {
        user: usersReducer,
        likedImages: likedImagesReducer
    },
});
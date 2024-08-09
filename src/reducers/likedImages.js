import { createSlice } from "@reduxjs/toolkit";
import { fetchLikedImages } from "../asyncFetches";

export const likedImagesSlice = createSlice({
    name: "likedImages",
    initialState: {
        likedImages: [],
        loading: true,
    },
    reducers: {
        likeImage: (state, action) => {
            const newLikedImage = action.payload;
            return { ...state, likedImages: [...state.likedImages, newLikedImage] };
        },
        unLikeImage: (state, action) => {
            const stateWithoutLikedImage = state.likedImages.filter(
                (item) => item.itemId !== action.payload.itemId
            );
            state.likedImages = stateWithoutLikedImage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLikedImages.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLikedImages.fulfilled, (state, action) => {
            state.likedImages = action.payload;
            state.loading = false;
        });
    },
});

export const { initLikedImages, likeImage, unLikeImage } =
    likedImagesSlice.actions;

export default likedImagesSlice.reducer;

// export const likedImagesReducer = (state= [], action) => {
//     switch (action.type) {
//         case "LIKE_IMAGE": {
//             const newLikedImage = action.payload;
//             return [...state, newLikedImage];
//         }
//         case "UNLIKE_IMAGE": {
//             const stateWithoutLikedImage = state.filter(
//                 (item) => item !== action.payload
//             );
//             return stateWithoutLikedImage;
//         }
//         default: {
//             throw new Error(`Unhandled action type: ${action.type}`);
//         }
//     }
// };
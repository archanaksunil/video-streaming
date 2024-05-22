import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        video: null
    },
    reducers: {
        addVideo: (state, action) => {
            state.video = action.payload;
        }
    }
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
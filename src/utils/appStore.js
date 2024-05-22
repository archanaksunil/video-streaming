import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        config: configSlice,
        video: videoSlice,
        search: searchSlice,
        chat: chatSlice
    }
});

export default appStore;
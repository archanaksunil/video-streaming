import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        isSidebarOpen: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSideBar: (state) => {
            state.isSidebarOpen = false;
        }
    }
});

export const { toggleSideBar, closeSideBar } = configSlice.actions;
export default configSlice.reducer;
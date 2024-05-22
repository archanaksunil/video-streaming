import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestions: [],
    showSuggestion: false,
    query: "",
    cache: {},
  },
  reducers: {
    addSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCache: (state, action) => {
      Object.assign(state.cache, action.payload);
    },
  },
});

export const { addSuggestions, setSuggestion, setQuery, setCache } = searchSlice.actions;
export default searchSlice.reducer;

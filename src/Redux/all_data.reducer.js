import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    links: [],
    local_links: [
      { id: 1, platform: "", link: "" },
      { id: 2, platform: "", link: "" },
    ],
  },
  reducers: {
    saveLinks: (state, action) => {
      state.links = action.payload;
    },
    addLocalLink: (state, action) => {
      state.local_links.push(action.payload);
    },
    removeLocalLink: (state, action) => {
      let id = action.payload;
      state.local_links = state.local_links.filter((item, i) => item.id !== id);
    },
    changelocalLinksOrder: (state, action) => {
      state.local_links = action.payload;
    },
  },
});

export const {
  saveLinks,
  addLocalLink,
  removeLocalLink,
  changelocalLinksOrder,
} = DataSlice.actions;

export default DataSlice.reducer;

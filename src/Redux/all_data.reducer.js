import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    links: [],
    local_links: [
      { id: 1, platform: "", link: "" },
      { id: 2, platform: "", link: "" },
      { id: 3, platform: "", link: "" },
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
    updateById: (state, action) => {
      let id = action.payload.id;
      let platform = action.payload.platform;
      let link = action.payload.link;
      state.local_links = state.local_links.map((item, i) => {
        if (item.id === id) {
          item.platform = platform;
          item.link = link;
        }
        return item;
      });
    },
  },
});

export const {
  saveLinks,
  addLocalLink,
  removeLocalLink,
  changelocalLinksOrder,
  updateById,
} = DataSlice.actions;

export default DataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    global_links: [
      { id: 1, platform: "", link: "" },
      { id: 1, platform: "", link: "" },
      { id: 1, platform: "", link: "" },
    ],
    local_links: [{ id: 1, platform: "", link: "" }],

    user_img: null,
    user_firstname: null,
    user_last_name: null,
    user_email: null,
  },
  reducers: {
    saveLinks: (state, action) => {
      state.global_links = action.payload;
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
    setUserData: (state, action) => {
      state.user_img = action.payload.img;
      state.user_firstname = action.payload.firstName;
      state.user_last_name = action.payload.lastName;
      state.user_email = action.payload.email;
    },

    SaveAllToLocalStorage: (state) => {
      localStorage.setItem("global_links", JSON.stringify(state.global_links));
      localStorage.setItem("local_links", JSON.stringify(state.local_links));
      localStorage.setItem("user_img", JSON.stringify(state.user_img));
      localStorage.setItem(
        "user_firstname",
        JSON.stringify(state.user_firstname)
      );
      localStorage.setItem(
        "user_last_name",
        JSON.stringify(state.user_last_name)
      );
      localStorage.setItem("user_email", JSON.stringify(state.user_email));
    },

    GetAllFromLocalStorage: (state) => {
      state.global_links = JSON.parse(localStorage.getItem("global_links"));
      state.local_links = JSON.parse(localStorage.getItem("local_links"));
      state.user_img = JSON.parse(localStorage.getItem("user_img"));
      state.user_firstname = JSON.parse(localStorage.getItem("user_firstname"));
      state.user_last_name = JSON.parse(localStorage.getItem("user_last_name"));
      state.user_email = JSON.parse(localStorage.getItem("user_email"));
    },
  },
});

export const {
  saveLinks,
  addLocalLink,
  removeLocalLink,
  changelocalLinksOrder,
  updateById,
  setUserData,
  SaveAllToLocalStorage,
  GetAllFromLocalStorage,
} = DataSlice.actions;

export default DataSlice.reducer;

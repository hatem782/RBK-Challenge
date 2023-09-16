import { configureStore } from "@reduxjs/toolkit";

import data from "./all_data.reducer";

const store = configureStore({
  reducer: {
    data,
  },
});

export default store;

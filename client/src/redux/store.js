import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;

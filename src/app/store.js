import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";

const store = configureStore({
  reducer: postReducer,
});

export default store;

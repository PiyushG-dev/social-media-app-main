import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ id: 1, desc: "random desc" }],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const post = { id: nanoid(), desc: action.payload };
      state.posts.push(post);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";
import pf1 from "../../images/pf1.jpeg";
import pf2 from "../../images/pf2.jpg";
import post1 from "../../images/post1.webp";

const initialState = {
  posts: [
    {
      id: 1,
      name: "Piers Morgan",
      profilePicture: pf1,
      username: "PiersMorgan",
      time: "5h",
      selectedImage: post1,
      desc: "Cristiano Ronaldo has just scored his 50th goal of 2023",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const post = {
        id: nanoid(),
        name: "Daniel Snellberg",
        profilePicture: pf2,
        username: "DanielSnellberg",
        time: "5h",
        selectedImage: post1,
        desc: action.payload,
      };
      state.posts.push(post);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;

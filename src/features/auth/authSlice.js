import { createSlice } from "@reduxjs/toolkit";
import { account } from "../../appwrite/auth";
import { ID } from "appwrite";

const initialState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: async (state, action) => {
      const { email, password } = action.payload;
      state.loading = true;
      try {
        const response = await account.createEmailSession(email, password);
        let accountDetails = await account.get();
        state.user = accountDetails;
      } catch (error) {
        console.error(error);
      }
      state.loading = false;
    },
    logoutUser: async (state, action) => {
      await account.deleteSession("current");
      state.user = null;
    },
    registerUser: async (state, action) => {
      const { email, password, name } = action.payload;
      try {
        const response = await account.create(
          ID.unique(),
          email,
          password,
          name
        );
        await account.createEmailSession(email, password);
        let accountDetails = await account.get();
        state.user = accountDetails;
      } catch (error) {
        console.error(error);
      }
    },
    checkUserStatus: async (state, action) => {
      try {
        let accountDetails = await account.get();
        state.user = accountDetails;
      } catch (error) {
        console.error(error);
      }
      state.loading = false;
    },
  },
});

export const { loginUser, logoutUser, registerUser, checkUserStatus } =
  authSlice.actions;

export default authSlice.reducer;

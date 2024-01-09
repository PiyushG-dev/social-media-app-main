import { createSlice } from "@reduxjs/toolkit";
import { account } from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const initialState = {
  loading: true,
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
  },
});

export default authSlice.reducer;

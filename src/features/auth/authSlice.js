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
      const navigate = useNavigate();
      state.loading = true;
      try {
        const response = await account.createEmailSession(email, password);
        let accountDetails = await account.get();
        state.user = accountDetails;

        navigate("/");
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
      const { name, email, password } = action.payload;
      const navigate = useNavigate();
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

        navigate("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default authSlice.reducer;

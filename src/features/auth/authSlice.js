import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../appwrite/auth";
import { ID } from "appwrite";

export const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userInfo) => {
    try {
      const response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      const accountDetails = await account.get();
      return accountDetails;
    } catch (error) {
      return error;
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await account.deleteSession("current");
  return null;
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userInfo) => {
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      return accountDetails;
    } catch (error) {
      return error;
    }
  }
);

export const checkUserStatus = createAsyncThunk(
  "auth/checkUserStatus",
  async () => {
    try {
      const accountDetails = await account.get();
      return accountDetails;
    } catch (error) {
      return error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logoutStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    checkUserStatusStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    checkUserStatusSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => (state.isLoading = true))
      .addCase(
        loginUser.fulfilled,
        (state, action) => (state.user = action.payload)
      )
      .addCase(
        loginUser.rejected,
        (state, action) => (state.error = action.error.message)
      )
      .addCase(logoutUser.pending, (state) => (state.isLoading = true))
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(
        logoutUser.rejected,
        (state, action) => (state.error = action.error.message)
      )
      .addCase(registerUser.pending, (state) => (state.isLoading = true))
      .addCase(
        registerUser.fulfilled,
        (state, action) => (state.user = action.payload)
      )
      .addCase(
        registerUser.rejected,
        (state, action) => (state.error = action.error.message)
      )
      .addCase(checkUserStatus.pending, (state) => (state.isLoading = true))
      .addCase(
        checkUserStatus.fulfilled,
        (state, action) => (state.user = action.payload)
      )
      .addCase(
        checkUserStatus.rejected,
        (state, action) => (state.error = action.error.message)
      );
  },
});

export default authSlice.reducer;

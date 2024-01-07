import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateI } from "../../../typings";
import { googleSignIn } from "./thunks";

const initialState: UserStateI = {
  userMessage: "",
  user: null,
  userError: false,
  userLoading: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    resetUser(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(googleSignIn.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.userError = false;
        state.user = action.payload.user;
        state.userMessage = action.payload.message;
      })
      .addCase(googleSignIn.rejected, (state, action: PayloadAction<any>) => {
        state.userError = true;
        state.userLoading = false;
        state.userMessage = action.payload.message;
      })
      .addDefaultCase((state, action) => {
        state.userLoading = false;
      }),
});

// Actions
export const { resetUser } = userSlice.actions;

// Reducer
export default userSlice.reducer;

// Extra Reducers

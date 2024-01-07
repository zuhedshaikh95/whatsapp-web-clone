import { auth } from "@/libs/firebase";
import { axiosInstance } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { NextRouter } from "next/router";

export const googleSignIn = createAsyncThunk("user/login", async (router: NextRouter, thunkAPI) => {
  const provider = new GoogleAuthProvider();
  try {
    const { user } = await signInWithPopup(auth, provider);
    const { data } = await axiosInstance.post<{ success: boolean; message: string; data: User }>("/api/v1/auth/login", {
      email: user.email,
      password: "123",
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      router.push("/onboarding");
      return thunkAPI.rejectWithValue(error.response?.data);
    }
    console.log({ "googleSignIn Error": error });
  }
});

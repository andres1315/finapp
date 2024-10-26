import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string | null;
  user: string | null;
  login:boolean;
}

const initialState: UserState = {
  name: null,
  user: null,
  login:false,
}

export const userSlice = createSlice({
  name: "user",
  initialState:initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.name = payload.name;
      state.user = payload.user;
      state.login=true;
    },
    resetUser: (state) => {
      state.name = null;
      state.user = null;
      state.login=false;
    },
  },
})


export const { setUser, resetUser } = userSlice.actions

export const sliceUser = userSlice.reducer
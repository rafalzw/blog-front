import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserInterface } from 'types'

export interface UserState {
    user: UserInterface | null;
    loading: boolean;
    error: boolean;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginStart: (state) => {
          state.loading = true;
      },
      loginSuccess: (state, action) => {
          state.loading = false;
          state.user = action.payload
      },
      loginFail: (state) => {
          state.loading = false;
      },
      logout: (state) => {
          return initialState;
      }
    },
})

export const { loginStart, loginSuccess, loginFail, logout } = userSlice.actions

export default userSlice.reducer
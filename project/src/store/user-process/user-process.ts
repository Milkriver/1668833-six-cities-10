import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string,
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    getUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {getUserEmail} = userProcess.actions;

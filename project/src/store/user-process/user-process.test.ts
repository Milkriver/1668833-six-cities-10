import { saveUserEmail, UserProcess, userProcess } from './user-process';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: ''
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }).authorizationStatus)
      .toEqual(AuthorizationStatus.Unknown);
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type }).authorizationStatus)
        .toEqual(AuthorizationStatus.Auth);
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }).authorizationStatus)
        .toEqual(AuthorizationStatus.NoAuth);
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type }).authorizationStatus)
        .toEqual(AuthorizationStatus.Auth);
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }).authorizationStatus)
        .toEqual(AuthorizationStatus.NoAuth);
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }).authorizationStatus)
        .toEqual(AuthorizationStatus.NoAuth);
    });
  });

  it('should save user email by a given value', () => {
    const email = 'ma@ya.ru';
    expect(userProcess.reducer(state, saveUserEmail(email)).userEmail)
      .toEqual(email);
  });
});

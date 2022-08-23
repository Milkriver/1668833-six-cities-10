import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const selectUserEmail = (state: State): string | undefined => state[NameSpace.User].userEmail;

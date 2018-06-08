import { combineReducers } from "redux";
import { Reimbursement } from "../models/reimbursement";
import { User } from './../models/user';
import { adminReducer } from "./admin.reducer";
import { reimReducer } from "./reim.reducer";
import { userReducer } from './user.reducer';


// import { signInReducer } from "./sign-in.reducer";


export interface IState {
  admin: IAdminState,
  reim: IReimState,
  user: IUser
  // {
  //   currentUser: User
  // }
  // signIn: ISignIn, 
};

export interface IUser {
  currentUser:User

}

export interface IReimState {
  currentReim: Reimbursement,
  newReims: Reimbursement[],
  wholeReim: any 
}

export interface IAdminState {
  dispReims: Reimbursement[], 
  searchStatus: string,
  searchUser: string
}

// export interface ISignIn {
//   username: string,
//   password: string,
//   errorMessage: string
// }


export const state = combineReducers<IState>({
  admin: adminReducer,
  reim: reimReducer,
  user: userReducer
  // signIn: signInReducer
});
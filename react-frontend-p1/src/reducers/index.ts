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
};

export interface IUser {
  currentUser:User
  errMsg:string
}

export interface IReimState {
  currentReim: Reimbursement,
  newReims: Reimbursement[],
  wholeReim: any 
}

export interface IAdminState {
  dispReims:any[], 
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
} as any);


 

// the following would only work if I also initialized values below, and would unfortunately not reference the reducers. 

// export const state = {
//   admin: {
//     dispReims: Reimbursement[],
//     searchStatus: string,
//     searchUser: string
//   },
//   reim: {
//     currentReim: Reimbursement,
//     newReims: Reimbursement[],
//     wholeReim: any
//   },
//   user: {
//     currentUser: User
//   }  
// }
import { combineReducers } from "redux";
import { Reimbursement } from "../models/reimbursement";
import { User } from "./../models/user";
import { adminReducer } from "./admin.reducer";
import { reimReducer } from "./reim.reducer";
import { userReducer } from "./user.reducer";

export interface IState {
  admin: IAdminState;
  reim: IReimState;
  user: IUser;
}

export interface IUser {
  currentUser: User;
  errMsg: string;
}

export interface IReimState {
  currentReim: Reimbursement;
  newReims: Reimbursement[];
  wholeReim: any;
}

export interface IAdminState {
  dispReims: any[];
  searchStatus: string;
  searchUser: string;
}

export const state = combineReducers<IState>({
  admin: adminReducer,
  reim: reimReducer,
  user: userReducer
} as any);

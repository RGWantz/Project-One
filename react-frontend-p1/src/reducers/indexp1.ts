import { combineReducers } from 'redux';
import { Reimbursement } from "../models/reimbursement";
import { User } from './../models/user';
import { adminReducer } from './admin.reducer';
import { reimReducer } from './reim.reducer';
import { userReducer } from './user.reducer';



export interface IState2 {
    admin: IAdminState2,
    reim: IReimState2, 
    user: IUserState2
}

export interface IAdminState2 {
    dispReims: any[],
    searchStatus: string,
    searchUser: string
}

export interface IReimState2 {
    currentReim: Reimbursement,
    newReims: any [],
    wholeReim: any
}

export interface IUserState2 {
    currentUser: User
}

export const state = combineReducers<IState2> ({
    admin: adminReducer,
    reim: reimReducer,
    user: userReducer
}as any);
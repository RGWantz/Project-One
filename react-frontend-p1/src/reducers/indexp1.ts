
// import { combineReducers } from 'redux';
import { Reimbursement } from "../models/reimbursement";
import { User } from './../models/user';


export interface IState2 {
    admin: IAdminState2,
    reim: IReimState2, 
    user: IUserState2
}

export interface IAdminState2 {
    dispReims: Reimbursement[],
    searchStatus: string,
    searchUser: string
}

export interface IReimState2 {
    currentReim: Reimbursement,
    newReims: Reimbursement[],
    wholeReim: any
}

export interface IUserState2 {
    currentUser: User
}

// export const state = combineReducers<IState2> ({

// });
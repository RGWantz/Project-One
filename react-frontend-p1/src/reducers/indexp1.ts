import { combineReducers } from 'redux';
import { Reimbursement } from "../models/reimbursement";
import { User } from './../models/user';
import { adminReducer } from './admin.reducer';
import { reimReducer } from './reim.reducer';
import { userReducer } from './user.reducer';



export interface IState2 {
    dispReims: any[],
    searchStatus: string,
    searchUser: string,
    currentReim: Reimbursement,
    newReims: any [],
    wholeReim: any,
    currentUser: User
     
    // admin: IAdminState2,
    // reim: IReimState2, 
    // user: IUserState2
}

// export interface IAdminState2 {
    
// }

// export interface IReimState2 {
    
// }

// export interface IUserState2 {
    
// }

export const state = combineReducers<IState2> ({
    admin: adminReducer,
    reim: reimReducer,
    user: userReducer
}as any);
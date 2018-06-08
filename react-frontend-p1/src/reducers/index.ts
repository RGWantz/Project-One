import { combineReducers } from "redux";
import { userReducer } from './user.reducer';

import { User } from './../models/user';
import { reimReducer } from "./reim.reducer";

// import { signInReducer } from "./sign-in.reducer";


export interface IState {
  reim: {
    currentUser: User
  },
  user: {
    currentUser: User
  },
  // signIn: ISignIn, 
  
  
};

export interface ISignIn {
  username: string,
  password: string,
  errorMessage: string
}


export const state = combineReducers<IState>({
 reim: reimReducer,
 user: userReducer,
  
  // signIn: signInReducer, 
  

  
});
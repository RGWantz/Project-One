// import { combineReducers } from 'redux';
import { userTypes } from "../actions/users/user.types";
// import { User } from './../models/user';


const initialState = {
  currentUser: {
    email: '', 
    firstName: '',
    lastName: '', 
    password: 'pass',
    role: 'employee',
    username: ''
  }
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userTypes.ADD_USER:
      return {
        currentUser: action.payload.currentUser
      };
      case userTypes.FIND_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
  }

  return state;
};

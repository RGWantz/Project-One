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
    case userTypes.UPDATE_USERNAME:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          username: action.payload.username,
        }
        
      };
    case userTypes.UPDATE_PASS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          password: action.payload.password
        }
        
      };
    case userTypes.UPDATE_FNAME:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          firstName: action.payload.firstName
        }
      };
    case userTypes.UPDATE_LNAME:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          lastName: action.payload.lastName
        }
        
      };
    case userTypes.UPDATE_EMAIL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: action.payload.email
        }
        
      };
    case userTypes.UPDATE_ROLE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          role: action.payload.role
        }
        
      };
    case userTypes.ADD_USER:
      return {
        currentUser: action.payload.currentUser
      };
    case userTypes.UPDATE_USERINFO:
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

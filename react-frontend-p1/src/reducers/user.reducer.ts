// import { combineReducers } from 'redux';
import { userTypes } from "../actions/users/user.types";
// import { User } from './../models/user';


const initialState = {
  currentUser: {
    email: '', 
    firstName: '',
    lastName: '', 
    password: '',
    role: 'employee',
    username: ''
  },
  errMsg: ''
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
          firstName: action.payload.firstname
        }
      };
    case userTypes.UPDATE_LNAME:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          lastName: action.payload.lastname
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
        ...state,
        currentUser: {
          email: '', 
          firstName: '',
          lastName: '', 
          password: 'pass',
          role: 'employee',
          username: ''
        }
      };
    case userTypes.UPDATE_USERINFO:
      return {
        ...state
      };
    case userTypes.FIND_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          firstName: action.payload.currentUser[0].firstName,
          lastName: action.payload.currentUser[0].lastName,
          email: action.payload.currentUser[0].email,
          password: action.payload.currentUser[0].password,
          role: action.payload.currentUser[0].role
        }
      };
    case userTypes.CHANGE_ERR:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };
    case userTypes.LOG_OUT:
      return {
        ...state,
        currentUser: initialState.currentUser,
        errMsg: 'You are signed out of your Account' 
      };
  }

  return state;
};

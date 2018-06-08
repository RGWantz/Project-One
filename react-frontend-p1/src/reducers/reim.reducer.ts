import { reimTypes } from "../actions/reims/reim.types";
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

export const reimReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case reimTypes.INCREMENT:
      return {
        currentUser: action.payload.currentUser
      };
      case reimTypes.UPDATE_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        year: 2018, 
      };
  }

  return state;
};

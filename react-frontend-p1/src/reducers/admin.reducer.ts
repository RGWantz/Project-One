import { adminTypes } from "../actions/admin/admin.types";
// import { User } from './../models/user';


const initialState = {
  dispReims: [],
  searchStatus: 'pending',
  searchUser: ''
}

export const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case adminTypes.CHANGE_STATUS:
      return {
        ...state,
        searchStatus: action.payload.searchStatus
        
      };
    case adminTypes.CHANGE_USER:
      return {
        ...state,
        searchUser: action.paylod.searchUser
        
      };
    case adminTypes.GETREIMS_BYSTATUS:
      return {
        ...state,
        dispReims: action.payload.dispReims
      };
    case adminTypes.GETREIMS_BYUSER:
      return {
        ...state,
        dispReims: action.payload.dispReims
      };
  }

  return state;
};

import { reimTypes } from "../actions/reims/reim.types";
// import { User } from './../models/user';


const initialState = {
  currentReim: {
    amount: 0,
    description:'', 
    timeOfExpense:  0, 
    title: '',
    type: '', 

  },
  newReims: [],
  wholeReim: {
    approver: 'pending',
    items: {}, 
    receipts: [], 
    status: 'pending',
    timeSubmitted: 0,
    username: '' // how do I make this the username of currentUser from the state? 
  }
}

export const reimReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case reimTypes.UPDATE_AMOUNT:
      return {
        ...state,
        currentReim: {
          ...state.currentReim,
          amount: action.payload.amount,
        }
        
      };
    case reimTypes.UPDATE_DESC:
      return {
        ...state,
        currentReim: {
          ...state.currentReim,
          description: action.payload.description
        }
        
      };
    case reimTypes.UPDATE_TIME:
      return {
        ...state,
        currentReim: {
          ...state.currentReim,
          timeOfExpense: action.payload.time
        }
      };
    case reimTypes.UPDATE_TITLE:
      return {
        ...state,
        currentReim: {
          ...state.currentReim,
          title: action.payload.title
        }
        
      };
    case reimTypes.UPDATE_TYPE:
      return {
        ...state,
        currentReim: {
          ...state.currentReim,
          type: action.payload.type
        }
        
      };
    case reimTypes.UPDATE_APPROVER:
      return {
        ...state,
        wholeReim: {
          ...state.wholeReim,
          approver: action.payload.approver
        }
        
      };
    case reimTypes.UPDATE_STATUS:
      return {
        ...state,
        wholeReim: {
          ...state.wholeReim,
          status: action.payload.status
        }
        
      };
    case reimTypes.UPDATE_SUBMIT_TIME:
      return {
        ...state,
        wholeReim: {
          ...state.wholeReim,
          timeSubmitted: action.payload.subtime
        }
      };
    case reimTypes.UPDATE_REIM_USERNAME:
      return {
        ...state,
        wholeReim: {
          ...state.wholeReim,
          username: action.payload.username
        }
      };
    case reimTypes.ADD_REIM:
      return {
        ...state,
        currentReim: {
          amount: 0,
          description:'', 
          timeOfExpense:  0, 
          title: '',
          type: '', 
      
        },
        newReims: action.payload.newReims
      };
    case reimTypes.EST_REIM_ITEMS:
      return {
        ...state,
        newReims: [],
        wholeReim: {
          ...state.wholeReim,
          items: action.payload.items
        }
      };
    case reimTypes.SUBMIT_REIM:
      return {
        ...state,
        wholeReim: {
          approver: 'pending',
          items: {}, 
          receipts: [], 
          status: 'pending',
          timeSubmitted: 0,
          username: ''  
        }
      };
    case reimTypes.UPDATE_REIM:
      return {
        ...state,
        wholeReim: {
          approver: 'pending',
          items: {}, 
          receipts: [], 
          status: 'pending',
          timeSubmitted: 0,
          username: ''  
        }
      };
  }

  return state;
};

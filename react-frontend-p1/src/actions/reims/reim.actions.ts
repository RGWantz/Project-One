import { Reimbursement } from '../../models/reimbursement';
import { reimTypes } from './reim.types';


/*TODO 
  verify url below
  decide how to send errors, status 
*/
export const submitReim = (wholeReim: any) => (dispatch: any) =>  {
  fetch('http://localhost:3001/reimbursements', { 
    body: JSON.stringify(wholeReim), 
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
    .then(resp => {
      // console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(data => {
      dispatch( {
        payload: {
          wholeReim: {
            approver: 'pending',
            items: {}, 
            receipts: [], 
            status: 'pending',
            timeSubmitted: 0,
            username: ''  
          }
        },
        type: reimTypes.SUBMIT_REIM,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}

export const updateReim = (wholeReim:any) => (dispatch: any) =>  {
  fetch('http://localhost:3001/reimbursements', { // double check that this is the desired url
    body: JSON.stringify(wholeReim), 
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  })
    .then(resp => {
      // console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(data => {
      dispatch( {
        payload: {
          wholeReim: {
            approver: 'pending',
            items: {}, 
            receipts: [], 
            status: 'pending',
            timeSubmitted: 0,
            username: ''  
          }
        },
        type: reimTypes.UPDATE_REIM,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}
export const addReim = (newReims: Reimbursement[], currentReim: Reimbursement) => {
  return {
    payload: {
      currentReim: {
        amount: 0,
        description:'', 
        timeOfExpense:  0, 
        title: '',
        type: '', 
    
      },
      newReims: newReims.push(currentReim),
      // The order won't be a problem, will it? 
    },
    type: reimTypes.ADD_REIM,
  }
}

export const estReimItems = (newReims: Reimbursement[], items:any) => {
  return {
    payload: {
      items: newReims,
      newReims: [],
    },
    type: reimTypes.EST_REIM_ITEMS,
  }
}

export const updateDescription = (description: string) => {
  return {
    payload: {
      description
    },
    type: reimTypes.UPDATE_DESC,
  }
}

export const updateamount = (amount:number) => {
  return {
    payload: {
      amount
    },
    type: reimTypes.UPDATE_AMOUNT,
  }
}

export const updateTitle = (title: string) => {
  return {
    payload: {
      title
    },
    type: reimTypes.UPDATE_TITLE,
  }
}

export const updateType = (type: string) => {
  return {
    payload: {
      type
    },
    type: reimTypes.UPDATE_TYPE,
  }
}

export const updateTime = (time:number) => {
  return {
    payload: {
      time
    },
    type: reimTypes.UPDATE_TIME,
  }
}

export const updateApprover = (approver: string) => {
  return {
    payload: {
      approver
    },
    type: reimTypes.UPDATE_APPROVER,
  }
}

export const updateStatus = (status: string) => {
  return {
    payload: {
      status
    },
    type: reimTypes.UPDATE_STATUS,
  }
}

export const updateSubmitTime = (subtime:number) => {
  return {
    payload: {
      subtime
    },
    type: reimTypes.UPDATE_SUBMIT_TIME,
  }
}
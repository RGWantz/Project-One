import { User } from '../../models/user';
import { userTypes } from './user.types';

/*TODO 
  decide how to send errors, status 
*/
export const addUser = (currentUser: User) => (dispatch: any) =>  {
  fetch('http://localhost:3001/users', { 
    body: JSON.stringify(currentUser), 
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
          currentUser: {
            email: '', 
            firstName: '',
            lastName: '', 
            password: 'pass',
            role: 'employee',
            username: ''
          }
        },
        type: userTypes.ADD_USER,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}

export const updateUserInfo = (currentUser: User) => (dispatch: any) =>  {
  fetch('http://localhost:3001/reimbursements', { // double check that this is the desired url
    body: JSON.stringify(currentUser), 
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
          data
        },
        type: userTypes.UPDATE_USERINFO,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}

export const findUser = (username: string) => (dispatch: any) =>  {
  fetch('http://localhost:3001/users/' + username, { credentials: 'include' })
    .then(resp => {
      // console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then((currentUser) => {
      dispatch( {
        payload: {
          currentUser
        },
        type: userTypes.FIND_USER,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: userTypes.UPDATE_USERNAME,
  }
}

export const updateFirstname = (firstname:string) => {
  return {
    payload: {
      firstname
    },
    type: userTypes.UPDATE_FNAME,
  }
}

export const updateLastname = (lastname: string) => {
  return {
    payload: {
      lastname
    },
    type: userTypes.UPDATE_LNAME,
  }
}

export const updatePassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: userTypes.UPDATE_PASS,
  }
}

export const updateEmail = (email:number) => {
  return {
    payload: {
      email
    },
    type: userTypes.UPDATE_EMAIL,
  }
}

export const updateRole = (role: string) => {
  return {
    payload: {
      role
    },
    type: userTypes.UPDATE_ROLE,
  }
}
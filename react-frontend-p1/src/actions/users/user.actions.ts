import { User } from "../../models/user";
import { userTypes } from "./user.types";

export const addUser = (currentUser: User) => (dispatch: any) => {
  fetch("http://localhost:3001/users", {
    body: JSON.stringify(currentUser),
    credentials: "include",
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  })
    .then(resp => {
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(data => {
      dispatch({
        payload: {
          data
        },
        type: userTypes.ADD_USER
      });
    })
    .catch(err => {
      // console.log(err);
    });
};

export const updateUserInfo = (currentUser: User) => (dispatch: any) => {
  fetch(`http://localhost:3001/users`, {
    body: JSON.stringify(currentUser),
    credentials: "include",
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  })
    .then(resp => {
      console.log(resp.status);
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(data => {
      dispatch({
        payload: {
          data
        },
        type: userTypes.UPDATE_USERINFO
      });
    })
    .catch(err => {
      // console.log(err);
    });
};

export const findUser = (credentials: any) => (dispatch: any) => {
  fetch("http://localhost:3001/users/" + credentials.username, {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(credentials),
    credentials: "include"
  })
    .then(resp => {
      return resp.json();
    })
    .then(currentUser => {
      if (!currentUser.error) {
        return dispatch({
          payload: {
            currentUser,
            errMsg: ""
          },
          type: userTypes.FIND_USER
        });
      } else {
        return dispatch({
          payload: {
            currentUser: [
              {
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                role: "employee",
                username: ""
              }
            ],
            errMsg: currentUser.error
          },
          type: userTypes.FIND_USER
        });
      }
    })
    .catch(err => {
      // console.log("message from server: ", err)
    });
};

export const changeErr = (errMsg: string) => {
  return {
    payload: {
      errMsg
    },
    type: userTypes.CHANGE_ERR
  };
};

export const logOut = (e: string) => {
  return {
    payload: {
      e
    },
    type: userTypes.LOG_OUT
  };
};

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: userTypes.UPDATE_USERNAME
  };
};

export const updateFirstname = (firstname: string) => {
  return {
    payload: {
      firstname
    },
    type: userTypes.UPDATE_FNAME
  };
};

export const updateLastname = (lastname: string) => {
  return {
    payload: {
      lastname
    },
    type: userTypes.UPDATE_LNAME
  };
};

export const updatePassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: userTypes.UPDATE_PASS
  };
};

export const updateEmail = (email: number) => {
  return {
    payload: {
      email
    },
    type: userTypes.UPDATE_EMAIL
  };
};

export const updateRole = (role: string) => {
  return {
    payload: {
      role
    },
    type: userTypes.UPDATE_ROLE
  };
};

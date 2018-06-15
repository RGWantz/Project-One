import { adminTypes } from "./admin.types";

export const getReimsByUser = (username: string) => (dispatch: any) => {
  fetch("http://localhost:3001/reimbursements/user/" + username, {
    credentials: "include"
  })
    .then(resp => {
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(dispReims => {
      dispatch({
        payload: {
          dispReims
        },
        type: adminTypes.GETREIMS_BYUSER
      });
    })
    .catch(err => {
      // console.log(err);
    });
};

export const getReimsByStatus = (status: string) => (dispatch: any) => {
  fetch("http://localhost:3001/reimbursements/status/" + status, {
    credentials: "include"
  })
    .then(resp => {
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then(dispReims => {
      dispatch({
        payload: {
          dispReims
        },
        type: adminTypes.GETREIMS_BYSTATUS
      });
    })
    .catch(err => {
      // console.log(err);
    });
};

export const changeSearchUser = (user: string) => (dispatch: any) => {
  dispatch({
    payload: {
      user
    },
    type: adminTypes.CHANGE_USER
  });
};

export const changeSearchStatus = (status: string) => (dispatch: any) => {
  dispatch({
    payload: {
      status
    },
    type: adminTypes.CHANGE_STATUS
  });
};

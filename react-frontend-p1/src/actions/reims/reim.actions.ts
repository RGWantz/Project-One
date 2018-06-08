import { reimTypes } from './reim.types';

export const increment = (amount: number) => { // (dispatch: any) => {
  // dispatch({
    return {
      payload: {
      amount
    },
    type: reimTypes.INCREMENT,
  }
  // })
}
/*TODO 
  change url below
  decide how to send errors, status 
  change function names
*/
export const updateMovies = (year: number) => (dispatch: any) =>  {
  fetch('http://localhost:3001/movies/year/' + year, { credentials: 'include' })
    .then(resp => {
      // console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then((movies) => {
      dispatch( {
        payload: {
          movies
        },
        type: reimTypes.UPDATE_MOVIES,
      })
    })
    .catch(err => {
      // console.log(err);
    });
}
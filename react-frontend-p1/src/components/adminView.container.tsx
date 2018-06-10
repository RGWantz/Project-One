import { connect } from 'react-redux';
import { changeSearchUser, getReimsByStatus, getReimsByUser} from '../actions/admin/admin.actions';
// import { findUser } from '../actions/users/user.actions';
// possibly
import { IState } from '../reducers';
import { UserViewComponent } from './userView.component';




const mapStateToProps = (state: IState) => (state.user);// determine which state... 
    
export const mapDispatchToProps = {
    changeSearchUser,
    getReimsByStatus,
    getReimsByUser
};

export const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserViewComponent);

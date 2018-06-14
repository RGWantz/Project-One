import { connect } from 'react-redux';
import { changeSearchStatus, changeSearchUser, getReimsByStatus, getReimsByUser, getSingleReim} from '../actions/admin/admin.actions';
import { updateApprover, updateReim, updateReimUsername, updateStatus, updateSubmitTime} from '../actions/reims/reim.actions';
// import { findUser } from '../actions/users/user.actions';
// possibly
import { IState } from '../reducers';
import { AdminViewComponent } from './adminView.component';




const mapStateToProps = (state: IState) => ({
  admin: state.admin,
  reim: state.reim, 
  user: state.user
}); 
    
export const mapDispatchToProps = {
    changeSearchStatus,  
    changeSearchUser,
    getReimsByStatus,
    getReimsByUser,
    getSingleReim,
    updateApprover,
    updateReim,
    updateReimUsername,
    updateStatus,
    updateSubmitTime
};

export const AdminViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminViewComponent);

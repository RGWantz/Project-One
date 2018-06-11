import { connect } from 'react-redux';
import { changeSearchStatus, changeSearchUser, getReimsByStatus, getReimsByUser} from '../actions/admin/admin.actions';
import { updateApprover, updateReim, updateStatus} from '../actions/reims/reim.actions';
// import { findUser } from '../actions/users/user.actions';
// possibly
import { IState } from '../reducers';
import { AdminViewComponent } from './adminView.component';




const mapStateToProps = (state: IState) => (state);// can I do this? 
    
export const mapDispatchToProps = {
    changeSearchStatus,  
    changeSearchUser,
    getReimsByStatus,
    getReimsByUser,
    updateApprover,
    updateReim,
    updateStatus
};

export const AdminViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminViewComponent);

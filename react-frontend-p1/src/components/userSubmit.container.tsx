import { connect } from 'react-redux';
import { addReim, estReimItems, submitReim, updateAmount, updateDescription, updateReimUsername, updateSubmitTime, updateTime, updateTitle, updateType} from '../actions/reims/reim.actions';
import { changeErr } from '../actions/users/user.actions';
import { IState } from '../reducers';
import { UserSubmitComponent } from './usersubmit.component';




const mapStateToProps = (state: IState) => ({
  reim: state.reim,
  user: state.user
});
    
export const mapDispatchToProps = {
  addReim,
  changeErr,
  estReimItems,
  submitReim,
  updateAmount,
  updateDescription,
  updateReimUsername,
  updateSubmitTime,
  updateTime,
  updateTitle,
  updateType  
};

export const UserSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSubmitComponent);

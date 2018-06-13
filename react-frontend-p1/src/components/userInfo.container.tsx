import { connect } from 'react-redux';
import { updateEmail, updateFirstname, updateLastname, updatePassword, updateUserInfo } from '../actions/users/user.actions';
import { IState } from '../reducers';
import { UserInfoComponent } from './userInfo.component';




const mapStateToProps = (state: IState) => (state.user); 
    
export const mapDispatchToProps = {
    updateEmail,
    updateFirstname,
    updateLastname,
    updatePassword,
    updateUserInfo
};

export const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfoComponent);

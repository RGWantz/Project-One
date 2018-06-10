import { connect } from 'react-redux';
import { addUser, findUser, updateEmail, updateFirstname, updateLastname, updatePassword, updateUserInfo } from '../actions/users/user.actions';
import { IState } from '../reducers';
import { UserInfoComponent } from './userInfo.component';




const mapStateToProps = (state: IState) => (state.user); // assuming this exists
    
export const mapDispatchToProps = {
    addUser,
    findUser,
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

import { connect } from 'react-redux';
import { findUser, updatePassword, updateUsername } from '../actions/users/user.actions';
import { IState } from '../reducers';
import { SigninComponent } from './signin.component';




const mapStateToProps = (state: IState) => (state.user);// determine which state... 
    
export const mapDispatchToProps = {
    findUser,
    updatePassword,
    updateUsername
};

export const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninComponent);

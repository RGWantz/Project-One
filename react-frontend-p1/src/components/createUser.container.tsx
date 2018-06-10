import { connect } from 'react-redux';
import { addUser, findUser, updateEmail, updateFirstname, updateLastname, updatePassword, updateUsername} from '../actions/users/user.actions';
import { IState } from '../reducers';
import { CreateUserComponent } from './createUser.component';




const mapStateToProps = (state: IState) => (state.user); // assuming this exists
    
export const mapDispatchToProps = {
    addUser,
    findUser,
    updateEmail,
    updateFirstname,
    updateLastname,
    updatePassword,
    updateUsername
};

export const CreateUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserComponent);

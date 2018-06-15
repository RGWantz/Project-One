import { connect } from "react-redux";
import {
  addUser,
  changeErr,
  findUser,
  updateEmail,
  updateFirstname,
  updateLastname,
  updatePassword,
  updateUsername
} from "../actions/users/user.actions";
import { IState } from "../reducers";
import { CreateUserComponent } from "./createUser.component";

const mapStateToProps = (state: IState) => state.user;

export const mapDispatchToProps = {
  addUser,
  changeErr,
  findUser,
  updateEmail,
  updateFirstname,
  updateLastname,
  updatePassword,
  updateUsername
};

export const CreateUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserComponent);

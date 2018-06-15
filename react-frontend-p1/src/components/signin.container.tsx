import { connect } from "react-redux";
import {
  changeErr,
  findUser,
  logOut,
  updateUsername
} from "../actions/users/user.actions";
import { IState } from "../reducers";
import { SigninComponent } from "./signin.component";

const mapStateToProps = (state: IState) => state.user;

export const mapDispatchToProps = {
  changeErr,
  findUser,
  logOut,
  updateUsername
};

export const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninComponent);

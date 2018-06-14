import { connect } from "react-redux";
import {
  changeSearchStatus,
  changeSearchUser,
  getReimsByStatus,
  getReimsByUser
} from "../actions/admin/admin.actions";
import {
  getSingleReim,
  updateApprover,
  updateReim,
  updateReimUsername,
  updateStatus,
  updateSubmitTime
} from "../actions/reims/reim.actions";
import { changeErr } from "../actions/users/user.actions";
// import { findUser } from '../actions/users/user.actions';
// possibly
import { IState } from "../reducers";
import { AdminViewComponent } from "./adminView.component";

const mapStateToProps = (state: IState) => ({
  admin: state.admin,
  reim: state.reim,
  user: state.user
});

export const mapDispatchToProps = {
  changeErr,
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
  mapDispatchToProps
)(AdminViewComponent);

import * as React from "react";
import { IUser } from "../reducers";
import { User } from "../models/user";
import { RouteProps } from "react-router";

interface IProp extends IUser, RouteProps {
  history: any;
  updateEmail: (email: string) => void;
  updateLastname: (lastname: string) => void;
  updateFirstname: (firstname: string) => void;
  updatePassword: (password: string) => void;
  updateUserInfo: (currentUser: User) => void;
}

export class UserInfoComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }

  public updateUserInfo = (e: any) => {
    this.props.updateUserInfo(this.props.currentUser);
    this.props.history.push("/user");
  };

  public updatePassword = (e: any) => {
    const password = e.target.value;
    this.props.updatePassword(password);
  };

  public updateFirstname = (e: any) => {
    const firstname = e.target.value;
    this.props.updateFirstname(firstname);
  };

  public updateLastname = (e: any) => {
    const lastname = e.target.value;
    this.props.updateLastname(lastname);
  };

  public updateEmail = (e: any) => {
    const email = e.target.value;
    this.props.updateEmail(email);
  };
  public render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <br />
          <h3 className="login-para">Update Your Account Details</h3>
          <br />
        </div>

        <div className="col-6 wide-margin">
          <div className="row">
            <h5> Usernames cannot be changed. </h5>
          </div>
          <div className="row">
            <br />
            <form onSubmit={this.updateUserInfo}>
              <div className="form-group">
                <label htmlFor="input-name">First Name: </label>
                <input
                  onChange={this.updateFirstname}
                  type="text"
                  className="form-control"
                  id="InputFName"
                  defaultValue={this.props.currentUser.firstName}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-name">Last Name: </label>
                <input
                  onChange={this.updateLastname}
                  type="text"
                  className="form-control"
                  id="InputLName"
                  defaultValue={this.props.currentUser.lastName}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-email">Email Address:</label>
                <input
                  onChange={this.updateEmail}
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  defaultValue={this.props.currentUser.email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-pass">Password:</label>
                <input
                  onChange={this.updatePassword}
                  type="password"
                  className="form-control"
                  id="InputPassword1"
                  defaultValue={this.props.currentUser.password}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Save Changes
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

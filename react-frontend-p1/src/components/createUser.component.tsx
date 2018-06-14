import * as React from "react";
import RevLogo from "./assets/rev-logo-3.png";
import { RouteProps } from "react-router";
import { IUser } from "../reducers";
import { User } from "../models/user";

interface IProp extends IUser, RouteProps {
  history: any;
  addUser: (currentUser: User) => void;
  changeErr: (errMsg: string) => void;
  findUser: (credentials: any) => void;
  updateUsername: (username: string) => void;
  updateEmail: (email: string) => void;
  updateLastname: (lastname: string) => void;
  updateFirstname: (firstname: string) => void;
  updatePassword: (password: string) => void;
}

export class CreateUserComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }

  public changeErr = (errMsg: string) => {
    this.props.changeErr(errMsg);
  };

  public addUser = (e: any) => {
    this.props.addUser(this.props.currentUser);
  };

  public updateUsername = (e: any) => {
    const username = e.target.value;
    this.props.updateUsername(username);
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

  public submit = (e: any) => {
    e.preventDefault();
    const credentials = {
      username: this.props.currentUser.username,
      password: ""
    };

    new Promise((resolve, reject) => {
      this.props.findUser(credentials);
      resolve();
    })
      .then(() => {
        setTimeout(() => {
          console.log(this.props.errMsg);
          if (this.props.errMsg === "Passwords do not match") {
            this.changeErr(`Username is already taken.
                    Please enter another.`);
          } else {
            this.addUser(this.props.currentUser);
            this.props.history.push("/signin");
          }
        }, 1500);
      })
      .catch(err => console.log("error on server: ", err));
    //
    // new Promise((resolve, reject) => { // It isn't waiting!
    //   this.props.findUser(this.props.currentUser.username);
    //     resolve();
    //   }).then(() => {

    //       if (this.props.currentUser.password) {
    //           this.changeErr('This Username already exists');
    //        }
    //       console.log(this.props.currentUser)
    // });
  };

  public componentDidMount() {
    this.props.changeErr("");
  }

  public render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <br />
          <div className="login-box col-5">
            <br />
            <h3 className="login-para">Create a new Account </h3>
            <br />
            <span className="error">{this.props.errMsg}</span>
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="input-name">Enter Your Name: </label>
                <input
                  value={this.props.currentUser.firstName}
                  onChange={this.updateFirstname}
                  type="text"
                  className="form-control"
                  id="InputFName"
                  placeholder="First Name"
                />

                <input
                  value={this.props.currentUser.lastName}
                  onChange={this.updateLastname}
                  type="text"
                  className="form-control"
                  id="InputLName"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-email"> Enter Your Email Address:</label>
                <input
                  value={this.props.currentUser.email}
                  onChange={this.updateEmail}
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-uname"> Choose a Username:</label>
                <input
                  value={this.props.currentUser.username}
                  onChange={this.updateUsername}
                  type="text"
                  className="form-control"
                  id="InputUser1"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-pass">Choose a Password:</label>
                <input
                  value={this.props.currentUser.password}
                  onChange={this.updatePassword}
                  type="password"
                  className="form-control"
                  id="InputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Create User
              </button>
            </form>
            <br />
          </div>
          <div className="col photo-area">
            <img
              className="img-adjust-position rev-logo"
              src={RevLogo}
              alt="revature"
            />
          </div>
        </div>
      </div>
    );
  }
}

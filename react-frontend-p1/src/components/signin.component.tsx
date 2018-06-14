import * as React from "react";
import { RouteProps } from "react-router";
import RevLogo from "./assets/rev-logo-3.png";
import { IUser } from "../reducers";
import { Link } from "react-router-dom";

interface IProp extends IUser, RouteProps {
  changeErr: (errMsg: string) => void;
  findUser: (credentials: any) => any;
  logOut: (e: string) => void;
  history: any;
  updateUsername: (username: string) => void;
}
let tempPass = "";

export class SigninComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }
  public changeTemp = (e: any): void => {
    const temp = e.target.value;
    tempPass = temp;
  };

  public changeErr = (errMsg: string) => {
    this.props.changeErr(errMsg);
  };

  public updateUsername = (e: any) => {
    const username = e.target.value;
    this.props.updateUsername(username);
  };

  public submit = (e: any) => {
    e.preventDefault();
    const credentials = {
      username: this.props.currentUser.username,
      password: tempPass
    };
    // WORKING SIGNIN
    // this.props
    //   .findUser(credentials)

    new Promise((resolve, reject) => {
      this.props.findUser(credentials);
      resolve();
    })
      .then(() => {
        setTimeout(() => {
          console.log(this.props.errMsg);
          if (!this.props.errMsg) {
            this.props.history.push("/user");
          }
        }, 1500);
      })
      .catch(err => console.log("error on server: ", err));

    // new Promise((resolve, reject) => {
    //   // It isn't waiting!
    //   this.props
    //     .findUser(this.props.currentUser.username)
    //     .then(data => console.log("after promise"));
    // }).then(() => {
    //   if (this.props.currentUser.email) {
    //     if (this.props.currentUser.password === tempPass) {
    //       // this.props.history.push('/user'); // Why doesn't it recognize history?
    //       console.log("ok");
    //     } else {
    //       this.changeErr("Password does not match. Please try again");
    //       console.log(tempPass);
    //     }
    //   } else {
    //     this.changeErr("This is not an existing Username");
    //     console.log(tempPass);
    //   }
    //   console.log(this.props.currentUser);
    // });
  };

  public componentDidMount() {
    this.props.logOut("1");
  }

  public render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <br />
          <div className="login-box col-4">
            <br />
            <h4 className="login-para">Log in to your Account</h4>
            <span className="error">{this.props.errMsg}</span>
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  value={this.props.currentUser.username}
                  onChange={this.updateUsername}
                  type="text"
                  className="form-control"
                  id="InputUser1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.changeTemp}
                  type="password"
                  className="form-control"
                  id="InputPassword1"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Sign in
              </button>
            </form>
            <br />
            <Link to="/users">
              <button className="btn btn-secondary">Create New Account</button>
            </Link>
          </div>
          <div className="col photo-area">
            <h1>Reimbursement System</h1>

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

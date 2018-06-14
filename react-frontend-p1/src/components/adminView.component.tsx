import * as React from "react";
import { IUser, IAdminState, IReimState } from "../reducers";

interface IProp extends IAdminState, IReimState, IUser {
  admin: any;
  reim: any;
  user: any;
  changeErr: (errMsg: string) => void;
  getSingleReim: (username: string, time: number) => any;
  getReimsByUser: (username: string) => any[];
  getReimsByStatus: (status: string) => any[];
  changeSearchUser: (username: string) => void;
  changeSearchStatus: (status: string) => void;
  updateApprover: (approver: string) => void;
  updateReim: (wholeReim: any) => void;
  updateReimUsername: (username: string) => void;
  updateStatus: (status: string) => void;
  updateSubmitTime: (time: number) => void;
}

export class AdminViewComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }

  public updateSubmitTime = (e: any) => {
    const time = parseInt(e.target.value, 10);
    this.props.updateSubmitTime(time);
  };

  public updateStatus = (e: any) => {
    this.props.updateStatus(e);
  };

  public updateReimUsername = (e: any) => {
    const username = e.target.value;
    this.props.updateReimUsername(username);
  };

  public updateApprover = (e: any) => {
    this.props.updateApprover(this.props.user.currentUser.username);
  };

  public changeSearchUser = (e: any) => {
    const username = e.target.value;
    this.props.changeSearchUser(username);
  };

  public changeSearchStatus = (e: any) => {
    const status = e.target.value;
    this.props.changeSearchStatus(status);
  };

  public getReimsByStatus = (e: any) => {
    this.props.getReimsByStatus(this.props.admin.searchStatus);
  };

  public getReimsByUser = (e: any) => {
    this.props.getReimsByUser(this.props.admin.searchUser);
  };

  public updateReim = (e: any) => {
    new Promise((res, rej) => {
      this.props.getSingleReim(
        this.props.reim.wholeReim.username,
        this.props.reim.wholeReim.timeSubmitted
      );
      res();
    }).then(() => {
      setTimeout(() => {
        this.updateApprover(this.props.user.currentUser.username);
        this.updateStatus(this.props.admin.searchStatus);
        if (
          this.props.reim.wholeReim.username ===
          this.props.user.currentUser.username
        ) {
          this.props.changeErr("Cannot update your own reimbursement requests");
        } else {
          this.props.updateReim(this.props.reim.wholeReim);
          setTimeout(() => {
            this.props.changeErr("Reimbursement updated successfully");
          }, 500);
        }
      }, 1000);
    });
  };

  public getSingleReim = (e: any) => {
    this.props.getSingleReim(
      this.props.reim.wholeReim.username,
      this.props.reim.wholeReim.timeSubmitted
    );
  };

  public componentDidMount() {
    this.getReimsByStatus("pending");
  }

  public componentWillUnmount() {
    this.props.changeErr("");
    this.getReimsByUser("");
  }

  public render() {
    if (this.props.user.currentUser.role === "admin") {
      return (
        <div className="r-margin">
          <br />
          <h3> Select Search Criteria</h3>

          <div className="row">
            <form onSubmit={this.getReimsByStatus}>
              <div className="col">
                <select
                  value={this.props.admin.searchStatus}
                  onChange={this.changeSearchStatus}
                  className="form-control"
                  id="FormControlSelect1"
                >
                  <option value="pending">pending</option>
                  <option value="approved">approved</option>
                  <option value="denied">denied</option>
                </select>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-secondary">
                  {" "}
                  Search by Status{" "}
                </button>
              </div>
            </form>
            <form onSubmit={this.getReimsByUser}>
              <div className="col">
                <input
                  value={this.props.admin.searchUser}
                  onChange={this.changeSearchUser}
                  type="text"
                  className="form-control"
                  id="SearchUser"
                  placeholder="Enter Username"
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-secondary">
                  {" "}
                  Search by Username{" "}
                </button>
              </div>
            </form>
          </div>

          <br />
          <h3>Recently Submitted Reimbursements </h3>

          {/* <button className="btn btn-secondary" type=""> Add New Reimbursement </button>  */}
          {/* Another button would only be needed with the sort-by-timestamp functionality */}

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Time Submitted</th>
                <th scope="col">Approver</th>
                <th scope="col">Status</th>
                <th scope="col">Receipts</th>
                <th scope="col">Items</th>
              </tr>
            </thead>
            <tbody className="reim-table-body">
              {this.props.admin.dispReims.map((reim: any) => (
                <tr key={reim.timeSubmitted}>
                  <td>{reim.username}</td>
                  <td>{reim.timeSubmitted}</td>
                  <td>{reim.approver}</td>
                  <td>{reim.status}</td>
                  <td>{reim.receipts}</td>
                  <table>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                      {/* <th scope="col">Time</th> */}
                    </tr>

                    {reim.items.map((item: any) => (
                      <tr key={item.title}>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                        <td>{item.type}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </table>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <h4>Approve or Deny a Reimbursement Request</h4>

          <form onSubmit={this.updateReim}>
            <div className="row">
              <div className="col-3">
                <label className="disappearing">Reimbursement Username</label>
                <input
                  value={this.props.reim.wholeReim.username}
                  onChange={this.updateReimUsername}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label className="disappearing">Reimbursement Timestamp</label>
                <input
                  value={this.props.reim.wholeReim.timeSubmitted}
                  onChange={this.updateSubmitTime}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label className="disappearing">Updated Status</label>
                <select
                  value={this.props.admin.searchStatus}
                  onChange={this.changeSearchStatus}
                  className="form-control"
                  id="FormControlSelect1"
                >
                  <option value="choose" hidden>
                    Select
                  </option>
                  <option value="approved">approved</option>
                  <option value="denied">denied</option>
                </select>
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-secondary">
              Update Reimbursement
            </button>
            <span className="error r-margin">{this.props.user.errMsg}</span>
          </form>
        </div>
      );
    } else {
      return (
        <h2 className="announce">
          {" "}
          You are not authorized to perform administrative tasks.{" "}
        </h2>
      );
    }
  }
}

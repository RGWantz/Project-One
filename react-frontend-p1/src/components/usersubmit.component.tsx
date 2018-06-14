import * as React from "react";
import { IReimState, IUser } from "../reducers";

import { Reimbursement } from "../models/reimbursement";

interface IProp extends IReimState, IUser {
  reim: any;
  user: any;
  changeErr: (errMsg: string) => void;
  addReim: (newReims: Reimbursement[], currentReim: Reimbursement) => void;
  estReimItems: (newReims: Reimbursement[], items: any) => void;
  submitReim: (wholeReim: any) => void;
  updateDescription: (description: string) => void;
  updateAmount: (amount: number) => void;
  updateTitle: (title: string) => void;
  updateTime: (time: number) => void;
  updateReimUsername: (username: string) => void;
  updateType: (type: string) => void;
  updateSubmitTime: (time: number) => void;
}

export class UserSubmitComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }

  public addReim = (e: any) => {
    new Promise((resolve, reject) => {
      this.props.updateTime(Date.now());
      resolve();
    }).then(() => {
      setTimeout(() => {
        this.props.addReim(
          this.props.reim.newReims,
          this.props.reim.currentReim
        );
        this.props.changeErr("Reimbursement added to list for submission");
      }, 500);
    });
  };

  public updateDescription = (e: any) => {
    const desc = e.target.value;
    this.props.updateDescription(desc);
  };

  public updateReimUsername = (e: any) => {
    const username = e.target.value;
    this.props.updateReimUsername(username);
  };

  public updateAmount = (e: any) => {
    const amount = parseInt(e.target.value, 10);
    this.props.updateAmount(amount);
  };

  public updateTitle = (e: any) => {
    const title = e.target.value;
    this.props.updateTitle(title);
  };

  public updateTime = (e: any) => {
    this.props.updateTime(Date.now());
  };

  public updateType = (e: any) => {
    const type = e.target.value;
    this.props.updateType(type);
  };

  public estReimItems = (e: any) => {
    this.props.estReimItems(this.props.newReims, this.props.wholeReim.items);
  };

  public submitReim = (e: any) => {
    new Promise((resolve, reject) => {
      new Promise((res, rej) => {
        this.props.updateReimUsername(this.props.user.currentUser.username);
        this.props.updateSubmitTime(Date.now());
        this.props.addReim(
          this.props.reim.newReims,
          this.props.reim.currentReim
        );
        res();
      }).then(() => {
        this.props.estReimItems(
          this.props.reim.newReims,
          this.props.reim.wholeReim.items
        );
      });

      resolve();
    }).then(() => {
      this.props.submitReim(this.props.reim.wholeReim);
      this.props.changeErr("Reimbursement submitted successfully");
    });
  };

  public componentDidMount() {
    this.props.changeErr("");
  }

  public componentWillUnmount() {
    this.props.updateSubmitTime(0);
    this.props.updateReimUsername("");
    this.props.estReimItems([], this.props.reim.wholeReim.items);
    this.props.changeErr("");
  }

  public render() {
    return (
      <div className="r-margin">
        <br />
        <h2>Submit a New Reimbursement for Approval</h2>
        <br />
        <div className="form-group row">
          <div className="col-4">
            <button
              className="btn btn-secondary form-control"
              onClick={this.addReim}
            >
              {" "}
              Add New Reimbursement to Submission
            </button>
            {/* onClick get another row to appear... Also to add reim */}
          </div>
          <div className="col-4">
            <button
              className="btn btn-secondary form-control"
              onClick={this.submitReim}
            >
              {" "}
              Submit Reimbursement Request{" "}
            </button>
          </div>
          {/* another button to show a table with newReims rendering in it?!? */}
        </div>
        <br />
        <form>
          <div className="row form-group">
            <div className="col-4">
              <label className="disappearing">Title</label>
              <input
                value={this.props.reim.currentReim.title}
                onChange={this.updateTitle}
                type="text"
                className="form-control"
                required
              />

              <label className="disappearing">Type</label>
              <select
                value={this.props.reim.currentReim.type}
                onChange={this.updateType}
                className="form-control"
                id="exampleFormControlSelect1"
                required
              >
                <option value="choose" hidden>
                  Select
                </option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Lodging">Lodging</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-4">
              <label className="disappearing">Amount</label>
              <input
                value={this.props.reim.currentReim.amount}
                onChange={this.updateAmount}
                type="number"
                className="form-control"
                required
              />
              <label className="disappearing">Description</label>
              <input
                value={this.props.reim.currentReim.description}
                onChange={this.updateDescription}
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </form>
        <span className="error r-margin">{this.props.user.errMsg}</span>
      </div>
    );
  }
}

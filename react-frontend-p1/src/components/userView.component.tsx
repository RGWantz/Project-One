import * as React from "react";
import { IAdminState } from "../reducers";

interface IProp extends IAdminState {
  admin: any;
  user: any;
  getReimsByUser: (username: string) => any[];
}

export class UserViewComponent extends React.Component<IProp, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    this.props.getReimsByUser(this.props.user.currentUser.username);
  }

  public componentWillUnmount() {
    this.props.getReimsByUser("");
  }

  public render() {
    return (
      <div className="r-margin">
        <br />
        <h3>
          Previously Submitted Reimbursements for{" "}
          {this.props.user.currentUser.firstName}{" "}
          {this.props.user.currentUser.lastName}
        </h3>
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
      </div>
    );
  }
}

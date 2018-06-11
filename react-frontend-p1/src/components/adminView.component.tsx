import * as React from 'react'; 
import { IUser, IAdminState } from '../reducers';

interface IProp extends IAdminState, IUser {
        getReimsByUser: (username:string) => any[]; 
        getReimsByStatus: (status:string) => any[];
        changeSearchUser: (username:string) => void; 
        changeSearchStatus: (status:string) => void; 
        updateApprover: (approver:string) => void;
        updateReim: (approver:string) => void;
        updateStatus: (approver:string) => void;
    }
    

export class AdminViewComponent extends React.Component<IProp,any> {
        constructor(props: any) {
            super(props);
        }

        public changeSearchUser = (e:any) => {
            const username = e.target.value;
            this.props.changeSearchUser(username); 
        }

        public changeSearchStatus = (e:any) => {
            console.log(`in status function, status is ${e.target.value}`)
            const status = e.target.value;
            this.props.changeSearchStatus(status); 
        }

        public getReimsByStatus = (e:any) => {
            // e.preventDefault();
            this.props.getReimsByStatus(this.props.searchStatus);
        }

        public getReimsByUser = (e:any) => {
            // e.preventDefault();
            this.props.getReimsByUser(this.props.searchUser);
        }
    
    
        public componentDidMount(){ 
            this.getReimsByStatus('pending');
        };
    public render() {
        return(
            
            <div className="r-margin">
                <br/> 
                <h3> Select Search Criteria</h3>
                
                <div className="row">
                    <form onSubmit={this.getReimsByStatus}>
                        <div className="col">
                            {/* <label className="disappearing">Status:</label> */}
                            <select value={this.props.searchStatus}
                                onChange={this.changeSearchStatus}
                                className="form-control" id="FormControlSelect1">
                                <option value="pending">pending</option>
                                <option value="approved">approved</option>
                                <option value="denied">denied</option>
                            </select>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-secondary" > Search by Status </button>
                        </div>
                    </form>
                    <form onSubmit={this.getReimsByUser}>
                        <div className="col">
                            <input value={this.props.searchUser}
                                onChange={this.changeSearchUser}
                                type="text"
                                className="form-control"
                                id="SearchUser"
                                placeholder="Enter Username" />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-secondary" > Search by Username </button>
                        </div>
                    </form>
                </div>
                
                <br/> 
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
                    {
                        this.props.dispReims.map((reim) =>  
                    <tr key={reim.timeSubmitted} >
                        <td >{reim.username}</td>
                        <td >{reim.timeSubmitted}</td>
                        <td >{reim.approver}</td>
                        <td >{reim.status}</td>
                        <td >{reim.receipts}</td>
                        <table>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Description</th>
                            {/* <th scope="col">Time</th> */}
                            </tr>
                            
                        {
                        reim.items.map((item :any) =>
                            <tr key={item.title}>
                                <td >{item.title}</td>
                                <td >{item.amount}</td>
                                <td >{item.description}</td>
                            </tr> 
                        )
                        }
                        </table>
                    </tr> 
                        )
                    }
                    
                    
                </tbody>
            </table>
            <form >
                <h4>Approve or Deny a Reimbursement Request</h4>
                h
            </form>
            </div>
        )
    }
}
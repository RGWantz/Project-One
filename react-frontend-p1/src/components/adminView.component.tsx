import * as React from 'react'; 
import { IUser, IAdminState, IReimState } from '../reducers';

interface IProp extends IAdminState, IReimState, IUser {
        getSingleReim: (username:string, time:number) => any;
        getReimsByUser: (username:string) => any[]; 
        getReimsByStatus: (status:string) => any[];
        changeSearchUser: (username:string) => void; 
        changeSearchStatus: (status:string) => void; 
        updateApprover: (approver:string) => void;
        updateReim: (wholeReim:any) => void;
        updateReimUsername: (username:string) => void;
        updateStatus: (status:string) => void;
        updateSubmitTime: (time:number) => void;
    }
    

export class AdminViewComponent extends React.Component<IProp,any> {
        constructor(props: any) {
            super(props);
        }

        public updateReim = (e:any) => {
            this.props.updateApprover(this.props.currentUser.username); // watch out for async
            this.props.updateReim(this.props.wholeReim); 
        }

        public updateSubmitTime = (e:any) => {
            const time = parseInt(e.target.value, 10);
            this.props.updateSubmitTime(time); 
        }

        public updateStatus = (e:any) => {
            const status = e.target.value;
            this.props.updateStatus(status); 
        }

        public updateReimUsername = (e:any) => {
            const username = e.target.value;
            this.props.updateReimUsername(username); 
        }

        public updateApprover = (e:any) => {
            const username = e.target.value;
            this.props.updateApprover(username); 
        }

        public changeSearchUser = (e:any) => {
            const username = e.target.value;
            this.props.changeSearchUser(username); 
        }

        public changeSearchStatus = (e:any) => {
            const status = e.target.value;
            this.props.changeSearchStatus(status); 
        }

        public getReimsByStatus = (e:any) => {
            this.props.getReimsByStatus(this.props.searchStatus);
        }

        public getReimsByUser = (e:any) => {
            this.props.getReimsByUser(this.props.searchUser);
        }

        public getSingleReim = (e:any) => {
            console.log(this.props.getSingleReim(this.props.wholeReim.username, this.props.wholeReim.timeSubmitted)); 
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
            <br/> 
                <h4>Approve or Deny a Reimbursement Request</h4>
                <div className="row">
                    <form onSubmit={this.getSingleReim}>
                          
                        {/*and then also call this.updateReim ... but watch out for async because wholeReim first needs to be updated */}
                        
                        <div className="col">
                        <label className="disappearing">Reimbursement Username</label>
                        <input value={this.props.wholeReim.username}
                            onChange={this.updateReimUsername}
                            type="text" className="form-control" />
                        </div>
                        <label className="disappearing">Reimbursement Timestamp</label>
                        <input value={this.props.wholeReim.timeSubmitted}
                            onChange={this.updateSubmitTime}
                            type="number" 
                            className="form-control" />
                        <label className="disappearing">Updated Status</label>
                        <select value={this.props.wholeReim.status}
                            onChange={this.updateStatus}
                            className="form-control" id="FormControlSelect1">
                            <option value="approved">approved</option>
                            <option value="denied">denied</option>
                        </select>
                        <button type="submit" className="btn btn-secondary">Update Reimbursement</button>
                    </form>
                </div>
            </div>
        )
    }
}
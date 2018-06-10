import * as React from 'react'; 
import { IAdminState, IUser } from '../reducers';
// import { User } from '../models/user';

interface IProp extends IAdminState, IUser {
    getReimsByUser: (username:string) => any[]; 
}

// on page load, do getReimsByUserCall, with currentUser or changeSearchUser 
export class UserViewComponent extends React.Component<IProp,any> {

    constructor(props: any) {
        super(props);
    }

    public submit = (e:any) => {
        e.preventDefault();
        this.props.getReimsByUser(this.props.currentUser.username); // need to make sure that it sends the username part of it like I want it to
    }


    public componentDidMount(){ // I don't think there's anything further to call it 
        this.submit(this.props.currentUser.username);// is this the parameter they want? 
    };
    
    public render() {
        return(
            
            <div className="r-margin">
                <br/> 
                <h3>Previously Submitted Reimbursements for {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3> 
                {/* <button className="btn btn-secondary" type=""> Add New Reimbursement </button>  */}
                {/* Another button would only be needed with the sort-by-timestamp functionality */}
           
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    // map them in! 
                    
                    <tr>
                        <th scope="row">2</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>blue</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}
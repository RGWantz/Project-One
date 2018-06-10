import * as React from 'react'; 
import { IUser, IAdminState } from '../reducers';

interface IProp extends IAdminState, IUser {
        getReimsByUser: (username:string) => any[]; 
        getReimsByStatus: (status:string) => any[];
        changeSearchUser: (username:string) => void; 
        changeSearchStatus: (status:string) => void; 
    }
    
let searchDet = true;
// on page load, do getReimsByUserCall, with currentUser or changeSearchUser 
export class AdminViewComponent extends React.Component<IProp,any> {
        constructor(props: any) {
            super(props);
        }

         

        public changeSearchUser = (e:any) => {
            const username = e.target.value;
            this.props.changeSearchUser(username); 
        }

        public changeSearchStatus = (e:any) => {
            const status = e.target.value;
            this.props.changeSearchStatus(status); 
        }
    
        public submit = (e:any) => {
            e.preventDefault();
            if(searchDet) {
                this.props.getReimsByStatus(this.props.searchStatus);
            } else {
                this.props.getReimsByUser(this.props.searchUser); 
            }
        }
    
    
        public componentDidMount(){ // I don't think there's anything further to call it 
            this.submit('pending');// is this the parameter they want? 
        };
    public render() {
        return(
            
            <div className="r-margin">
                <br/> 
                <h3>Recently Submitted Reimbursements </h3> 
                
                {/* <button className="btn btn-secondary" type=""> Add New Reimbursement </button>  */}
                {/* Another button would only be needed with the sort-by-timestamp functionality */}
                {/* put in boxes to enter the desire search criteria; don't forget to change searchDet  */}
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
import * as React from 'react'; 


// on page load, do getReimsByUserCall, with currentUser or changeSearchUser 
export class AdminViewComponent extends React.Component<any,any> {

    public render() {
        return(
            
            <div className="r-margin">
                <br/> 
                <h3>Recently Submitted Reimbursements </h3> 
                
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
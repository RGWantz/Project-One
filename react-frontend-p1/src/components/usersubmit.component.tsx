import * as React from 'react'; 



export class UserSubmitComponent extends React.Component<any,any> {

    public render() {
        return(
            
            <div className="r-margin">
                <br/> 
                <h2>Submit a New Reimbursement for Approval</h2> 
                <button className="btn btn-secondary" type=""> Add New Reimbursement </button> 
            
            {/* // onClick show first row of table... except it's a form table */}
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
                        <form>
                            <th scope="row">1</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <input type="number" className="form-control" />
                            </td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>    
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>FOOD</option>
                                    <option>TRAVEL</option>
                                    <option>LODGING</option>
                                    <option>OTHER</option>
                                </select>
                            </td>
                        </form>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>blah</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
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
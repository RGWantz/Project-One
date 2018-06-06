import * as React from 'react'; 



export class SigninComponent extends React.Component<any,any> {

    public render() {
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <br/> 
                    <div id="login-box" className="col-3">
                        <br/> 
                        Log in to your Account 
                        <br/> 
                        <br/> 
                        <form>
                            <div className="form-group">
                                <label >Username</label>
                                <input type="text" className="form-control" id="InputUser1" aria-describedby="emailHelp" placeholder="Enter username"/>
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                            </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label">I am an admin</label>
                                    </div>
                                        <button type="submit" className="btn btn-info">Sign in</button>
                        </form>
                        <br/>
                    </div>
                    <div className="col photo-area">
                        <h2>Reimbursement Submission Portal</h2>
                        center the text of "log in" and checkbox and button
                        get a thick navbar for the left side
                        Get picture here
                        {/* Image here -- large*/}
                    </div>
                    {/* <div className="col">
                        3 of 3
                    </div> */}
                </div>
                
            </div>
        )
    }
}
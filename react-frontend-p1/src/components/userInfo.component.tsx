import * as React from 'react'; 


export class UserInfoComponent extends React.Component<any,any> {

    public render() {
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <br/> 
                    <h3 className="login-para">
                        Update Your Account Details
                        </h3>
                    <br/>
                </div>

                <div className="col-6 wide-margin">
                    <div className="row">
                       
                        <h5> Usernames cannot be changed. </h5>

                    </div>
                    <div className="row">
                        <br />
                        <form>
                            <div className="form-group">
                                <label htmlFor="input-name">First Name: </label>
                                <input type="text"
                                    className="form-control"
                                    id="InputFName"
                                    placeholder="Current First Name" />
                                {/* defaultValue will be {this.props.currentUser.firstname} */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-name">Last Name: </label>
                                <input type="text"
                                    className="form-control"
                                    id="InputLName"
                                    placeholder="Current Last Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email">Email Address:</label>
                                <input type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    placeholder="Current Email" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="input-pass">Password:</label>
                                <input type="password"
                                    className="form-control"
                                    id="InputPassword1"
                                    placeholder="Current Password" />
                            </div>
                            <button type="submit" className="btn btn-secondary">Save Changes</button>
                        </form>
                        <br />


                    </div>
                </div>    
            </div>
        )
    }
}
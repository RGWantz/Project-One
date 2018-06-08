import * as React from 'react'; 
import RevLogo from './assets/rev-logo-3.png';


export class SigninComponent extends React.Component<any,any> {

    public render() {
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <br/> 
                    <div className="login-box col-4">
                        <br/> 
                        <h4 className="login-para">
                        Log in to your Account 
                        </h4>
                        
                        <form>
                            <div className="form-group">
                                <label >Username</label>
                                <input type="text" className="form-control" id="InputUser1" placeholder="Enter username"/>
                            </div>
                            <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                            </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label">I am an admin</label>
                                    </div>
                                        <button type="submit" className="btn btn-secondary">Sign in</button>
                        </form>
                        <br/>
                    </div>
                    <div className="col photo-area">
                        <h1>Reimbursement Submission Page</h1>
                    
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </div>
                </div>
                
            </div>
        )
    }
}
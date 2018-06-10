import * as React from 'react'; 
import RevLogo from './assets/rev-logo-3.png';
import { User } from '../models/user';
import { IUser } from '../reducers';

interface IProp extends IUser {
    findUser: (currentUser:User) => void;
    updatePassword: (password:string) => void;
    updateUsername: (username:string) => void;
}

export class SigninComponent extends React.Component<IProp,any> {
    constructor(props: any) {
        super(props);
    }

    public updateUsername = (e:any) => { 
        const username = e.target.value;
        this.props.updateUsername(username); 
    }

    public updatePassword = (e:any) => {
        const password = e.target.value;
        this.props.updatePassword(password); 
    }
    
    public submit = (e:any) => {
        e.preventDefault();
        this.props.findUser(this.props.currentUser); // need to make sure that it sends the username part of it like I want it to
    }

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
                        
                        <form onSubmit={this.submit}>
                            <div className="form-group">
                                <label >Username</label>
                                <input value={this.props.currentUser.username} 
                                    onChange= {this.updateUsername} // determine if bind needed 
                                    type="text" 
                                    className="form-control" 
                                    id="InputUser1" placeholder="Enter username"/>
                            </div>
                            <div className="form-group">
                                    <label >Password</label>
                                    <input value={this.props.currentUser.password} 
                                    onChange= {this.updatePassword}
                                    type="password" 
                                    className="form-control" 
                                    id="InputPassword1" 
                                    placeholder="Enter Password"/>
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
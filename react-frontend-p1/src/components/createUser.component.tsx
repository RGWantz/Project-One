import * as React from 'react'; 
import RevLogo from './assets/rev-logo-3.png';


export class CreateUserComponent extends React.Component<any,any> {

    public render() {
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <br/> 
                    <div className="login-box col-5">
                        <br/> 
                        <h3 className="login-para" >Create a new Account </h3>
                        <br/> 
                        <form>
                            <div className="form-group">
                                <label htmlFor="input-name">Enter Your Name: </label>
                                <input type="text" 
                                    className="form-control" 
                                    id="InputFName" 
                                    placeholder="First Name"/>

                                <input type="text" 
                                    className="form-control" 
                                    id="InputLName" 
                                    placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email"> Enter Your Email Address:</label>
                                <input type="email" 
                                    className="form-control" 
                                    id="InputEmail" 
                                    placeholder="Email"/>
    
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-uname"> Choose a Username:</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="InputUser1" 
                                    placeholder="Username"/>
    
                            </div>
                            <div className="form-group">
                                    <label htmlFor="input-pass">Choose a Password:</label>
                                    <input type="password" 
                                        className="form-control" 
                                        id="InputPassword1" 
                                        placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-secondary">Create User</button>
                        </form>
                        <br/>
                    </div>
                    <div className="col photo-area">
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </div>
                </div>
            </div>
        )
    }
}
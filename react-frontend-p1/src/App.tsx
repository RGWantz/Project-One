import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdminViewComponent } from './components/adminView.component';
import { CreateUserComponent } from './components/createUser.component';
// import { NavComponent } from './components/nav.component';
import { SigninComponent } from './components/signin.component';
import { UserInfoComponent } from './components/userInfo.component';
import { UserSubmitComponent } from './components/usersubmit.component';
import { UserViewComponent } from './components/userView.component';

import './include/bootstrap';



class App extends React.Component {
  public render() {
    return (
      <HashRouter> 
        <div>
        
          <Switch>
            <Route path="/signin" component={SigninComponent} />
            <Route path="/users" component={CreateUserComponent} />
            <div>
              <Switch>
                {/* <NavComponent /> */}
                <Route path="/user/submit" component={UserSubmitComponent} />
                <Route path="/user/update" component={UserInfoComponent}/>
                <Route path="/user" component={UserViewComponent} />
                <Route path="/admin" component={AdminViewComponent}/>
              </Switch>
            </div>
            <Route component={SigninComponent} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

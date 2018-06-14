import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { store } from './Store';
import { AdminViewContainer } from './components/adminView.container';
import { CreateUserContainer } from './components/createUser.container';
import { SigninContainer } from './components/signin.container';
import { UserInfoContainer } from './components/userInfo.container';
import { UserSubmitContainer } from './components/userSubmit.container';
import { UserViewContainer } from './components/userView.container';
import './include/bootstrap';
import { NavComponent } from './components/nav.component';

class App extends React.Component {
  public render() {
    return (
      <Provider store = {store}>
      <HashRouter> 
        <div>
          <Switch>
            <Route path="/signin" component={SigninContainer} />
            <Route path="/users" component={CreateUserContainer} />
            <div>
              <NavComponent />
              <Switch>
                <Route path="/user/submit" component={UserSubmitContainer} />
                <Route path="/user/update" component={UserInfoContainer}/>
                <Route path="/user" component={UserViewContainer} />
                <Route path="/admin" component={AdminViewContainer}/>
              </Switch>
            </div>
            <Route path="/" component={SigninContainer} />
          </Switch>
          
        </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
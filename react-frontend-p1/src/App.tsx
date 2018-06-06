import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { SigninComponent } from './components/signin.component';
import { UserSubmitComponent } from './components/usersubmit.component';
import './include/bootstrap';
// import logo from './logo.svg';


class App extends React.Component {
  public render() {
    return (
      <HashRouter> 
        <div>
        {/* <NavComponent />  */}
          <Switch>
            <Route path="/user/submit" component={UserSubmitComponent} />
            {/* <Route path="/second" component={SecondComponent} />
            <Route path="/clicker" component={ClickerComponent} />
            <Route path="/tic-tac-toe" component={TicTacComponent}/> */}
            <Route component={SigninComponent} />
          </Switch>
        </div>
      </HashRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      //   <SigninComponent/>
      // </div>
    );
  }
}

export default App;

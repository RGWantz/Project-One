import * as React from 'react';
import { Link } from 'react-router-dom';
// import RevLogo from './assets/rev-logo.png';

export const NavComponent: React.StatelessComponent<{}> = () => {
  return (
    <div>
          <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <Link to="/user/update" className="unset-anchor nav-link">Update User Info</Link>
                  <Link to="/user/submit" className="unset-anchor nav-link">Add Submission</Link>
                  <Link to="/signin" className="unset-anchor nav-link">Log Out</Link>
                </div>
          </nav>


        {/* <nav className= "navbar navbar-dark">
          <ul className="nav flex-column">
              <li className="nav-item">
                  
                  {/* <a className="nav-link active" href="#">Active</a> 
              </li>
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                  
              </li>
          </ul>
        </nav> */}
    </div>
  )
}
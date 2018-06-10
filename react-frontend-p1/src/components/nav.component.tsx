import * as React from 'react';
import { Link } from 'react-router-dom';
// import RevLogo from './assets/rev-logo.png';

export const NavComponent: React.StatelessComponent<{}> = () => {
  return (
    <div>
        <nav className= "navbar navbar-dark">
          <ul className="nav flex-column">
              <li className="nav-item">
                  <Link to="/user/submit" className="unset-anchor nav-link">Add Submission</Link>
                  {/* <a className="nav-link active" href="#">Active</a> */}
              </li>
              <li className="nav-item">
                <Link to="/user/update" className="unset-anchor nav-link">Update User Info</Link>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                  <Link to="/signin" className="unset-anchor nav-link">Log Out</Link>
              </li>
          </ul>
        </nav>
    </div>
  )
}
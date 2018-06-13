import * as React from 'react';
import { Link } from 'react-router-dom';
// import RevLogo from './assets/rev-logo.png';



export const NavComponent: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-secondary">
                <div className="container">
                    <Link to="/user" className="unset-anchor nav-link">Welcome</Link>
                    <Link to="/user/update" className="unset-anchor nav-link">Update User Info</Link>
                    <Link to="/user/submit" className="unset-anchor nav-link">Add Submission</Link>
                    <Link to="/signin" className="unset-anchor nav-link">Log Out</Link>
                </div>
            </nav>
        </div>
    );
}
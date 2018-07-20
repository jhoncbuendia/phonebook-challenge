import React, { Component } from 'react';

class TopBar extends Component {

    constructor() {
        super();
    }

    render () {

        return (
            <nav className="navbar navbar-expand-lg nav-custom-theme">
            <a className="navbar-brand active-label" href="#">Phone Book</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav menu">
                <li className="nav-item active">
                  <a className="nav-link bold active-label" href="#">Contacts <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bold active-label" href="#">Another option</a>
                </li>
              </ul>
              <ul className="nav navbar-nav user-menu">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle bold active-label" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item bold active-purple-label" href="#">Settings</a>
                    <a className="dropdown-item bold active-purple-label" href="#">Help</a>
                    <a className="dropdown-item bold active-purple-label" href="#">Sign Out</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>  
        )
    }
}

export default TopBar;
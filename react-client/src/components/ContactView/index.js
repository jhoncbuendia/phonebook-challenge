import React, { Component } from 'react';
import ContactList from '../ContactList';

class ContactView extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
              <div className="row list-view-container">
                <div className="col-sm-2 nav-options-wrapper">
                <ul className="nav flex-column nav-options">
                  <li className="nav-item">
                    <a className="nav-link active active-blue-label bold" href="#">Created At</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled bold" href="#">All</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled bold" href="#">Today</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled bold" href="#">This week</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled bold" href="#">This Moth</a>
                  </li>
                </ul>
                <hr/>
                <ul className="nav flex-column nav-options">
                  <li className="nav-item">
                    <a className="nav-link active active-blue-label bold" href="#">Other Filter</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled bold" href="#">Disabled</a>
                  </li>
                </ul>
                </div>
                <div className="col-sm-10">
                  <ContactList/>
                </div>
              </div>
            </div>
          )
    }
}

export default ContactView;
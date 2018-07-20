import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import ContactModal from '../ContactModal';
import {addContacts} from '../../actions';
import Services from '../../services';

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.services = new Services();
    }

    render () {

        return (
            <div>
                <ContactModal/>
                <div className="row">
                <div className="col-sm-8">
                    <form className="form-inline my-6 my-lg-0">
                    <fieldset className="form-group ">
                    <label for="search" className="bmd-label-floating search-label">search</label>
                    <input type="email" className="form-control search-box" id="search"
                        onChange = { 
                            (event) => {
                                this.services.filterContact(
                                    event.target.value,
                                    (err, response) => {
                                        console.log(JSON.parse(response));
                                        this.props.addContacts(JSON.parse(response));
                                    }
                                )
                            }
                        }
                    />
                    </fieldset>
                    </form>
                </div>
                <div className="col-sm-2">
                <span className="create-btn-label active-blue-label">Add Contact</span>
                <button type="button" className="btn btn-primary bmd-btn-fab create-btn" data-toggle="modal" data-target="#exampleModal">
                    <i className="material-icons">add</i>
                </button>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-10">
                <table className="table table-hover contacts-table">
                    <thead>
                    <tr>
                        <th scope="col" className="active-blue-label">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.state.contactsList.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row" className="active-blue-label">{index}</th>
                                    <td>{element.firstName}</td>
                                    <td>{element.LastName}</td>
                                    <td>{element.phone}</td>
                                    <td><Moment parse="YYYY-MM-DD HH:mm">{element.createAt}</Moment></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        //this.props.getContacts();
        this.services.getContacts((err, response) => {
            console.log(JSON.parse(response));
            this.props.addContacts(JSON.parse(response));
        })

    }

}

function mapStateToProps(state) {
    return {
        state: state
    }
}
    
function mapDispatchToProps (dispatch) {
    return {
        addContacts: function(contactList) {
            dispatch(addContacts(contactList));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ContactList);
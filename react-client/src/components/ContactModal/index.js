import React, { Component } from 'react';
import { connect } from 'react-redux';
import Services from '../../services';
import {addContacts} from '../../actions';
import $ from 'jquery'; 

class ContactModal extends Component {

	constructor(props) {
		super(props);
		this.services = new Services();
		this.state = {
			firstName: false,
			lastName: false,
			phone: false,
			showMessage: false,
		}
	}

	isFormValid() {
		if (this.state.firstName && this.state.lastName && this.state.phone) return true;
		else return false;
	}

	showMessage() {
		if (this.state.showMessage) {
			return (
				<div class="alert alert-danger" role="alert">
					Please complete the information required
          </div>
			)
		}
	}

	render() {

		return (
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title active-blue-label bold" id="exampleModalLabel">Add a new contact</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="firstName" class="bmd-label-floating">First Name</label>
									<input type="text" class="form-control" id="firstName"
										onChange={(event) => {
											this.setState({ firstName: event.target.value })
										}
										}
									/>
									<span class="bmd-help">Write the first name</span>
								</div>
								<div class="form-group">
									<label for="lastName" class="bmd-label-floating">Last Name</label>
									<input type="text" class="form-control" id="lastName"
										onChange={(event) => {
											this.setState({ lastName: event.target.value })
										}
										}
									/>
									<span class="bmd-help">Write the last name</span>
								</div>
								<div class="form-group">
									<label for="phone" class="bmd-label-floating">Phone</label>
									<input type="text" class="form-control" id="phone"
										onChange={(event) => {
											this.setState({ phone: event.target.value })
										}
										}
									/>
									<span class="bmd-help">Write the phone</span>
								</div>
								{this.showMessage()}
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary active-label"
								onClick={(event) => {
									if (this.isFormValid()) {
										this.services.addContact(
											{
												firstName: this.state.firstName,
												LastName: this.state.lastName,
												phone: this.state.phone,
											},
											(err, response) => {
												console.log('response', response);
												this.services.getContacts((err, response) => {
													this.props.addContacts(JSON.parse(response));
													window.$('#exampleModal').modal('hide');
												})
											}
										);
									} else {
										this.setState({showMessage:true});
									}
								}
								}
							>Save changes</button>
						</div>
					</div>
				</div>
			</div>
		)
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

export default connect(mapStateToProps, mapDispatchToProps )(ContactModal);
import React from 'react';
import './Contact.css';
import {ThankYouMessage} from './ThankYouMessage.jsx';

export const Contact = React.createClass({
	getInitialState() {
		return {
			submitted: false
		};
	},
	submitForm(e){
		e.preventDefault();
		const name = React.findDOMNode(this.refs.name).value;
		const email = React.findDOMNode(this.refs.email).value;
		const text = React.findDOMNode(this.refs.text).value;

		Meteor.call('submitContactInfo', name, email, text, error => {
			if(error) return;
				this.setState({
					submitted: true
				});
		});
	},
	render() {
		let contactPage;
		if(this.state.submitted == false){
			contactPage = (
				<div>
					<div className="contact-form__header">
							Work with us
					</div>
					<form className="contact-form">
						<input 
							type="text" 
							ref="name"
							placeholder="Name"
						/>
						<input 
							type="text" 
							ref="email"
							placeholder="Email"
						/>
						<textarea 
							type="text"
							ref="text"
							placeholder="About your company and project"
						/>
						<button 
							className="submit-contact-form-button"
							onClick={this.submitForm}
						>
							send message
						</button>
					</form>
				</div>
			);
		}else{
			contactPage = (<ThankYouMessage />);
		}
		return(
			<div className="contact-page">
				{contactPage}
			</div>
		)
	}
});
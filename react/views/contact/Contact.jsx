import React from 'react';
import './Contact.css';

export const Contact = React.createClass({
	submitForm(e){
		e.preventDefault();
		const name = React.findDOMNode(this.refs.name).value;
		const email = React.findDOMNode(this.refs.email).value;
		const text = React.findDOMNode(this.refs.text).value;

		Meteor.call('submitContactInfo', name, email, text);
	},
	render(){
		return(
			<div className="contact-page">
				<div className="contact-page__header">
					Work with us
				</div>
				<form className="contact-page__email-form">
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
		)
	}
});
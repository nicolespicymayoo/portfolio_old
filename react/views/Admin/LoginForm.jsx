import React from 'react';
import './LoginForm.css';

export const LoginForm = React.createClass({
	loginAdmin(e){
		e.preventDefault();
		var email = React.findDOMNode(this.refs.email).value;
		var password = React.findDOMNode(this.refs.password).value;
		Meteor.loginWithPassword(email, password)
	},
	render(){
		return(
			<div>
				<div className="login-form-header">sup shawty</div>
				<form className="login-form">
					<input 
						className="login-form-email"
						ref="email"
						type="text"
						placeholder="email"
					/>
					<input 
						className="login-form-password"
						ref="password"
						type="password"
						placeholder="password"
					/>
					<button onClick={this.loginAdmin}>
						admin activatione!!
					</button>
				</form>
			</div>
		)
	}
});
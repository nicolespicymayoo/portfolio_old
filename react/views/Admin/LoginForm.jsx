import React from 'react';
import './LoginForm.css';

export const LoginForm = React.createClass({
	render(){
		return(
			<form className="login-form">
				<input className="login-form-email" type="text" placeholder="email"/>
				<input className="login-form-password" type="password" placeholder="password"/>
				<button className="login-button">admin activation!!</button>
			</form>
		)
	}
});
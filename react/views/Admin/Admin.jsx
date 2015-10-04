import React from 'react';
import './Admin.css';
import { LoginForm } from './LoginForm.jsx';
import { RequestList } from './RequestList.jsx';

export const Admin = React.createClass({
	render(){
		let adminPage;
		if(Meteor.user()){
			adminPage = (<RequestList />)
		}else{
			adminPage = (<LoginForm />)
		}
			return(
				<div className="admin-page">
					{adminPage}
				</div>
				
			)
	}
});
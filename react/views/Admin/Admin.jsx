import React from 'react';
import './Admin.css';
import { LoginForm } from './LoginForm.jsx';
import { RequestList } from './RequestList.jsx';

export const Admin = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		return{
			admin: Meteor.user()
		};
	},
	render(){
		let adminPage;
		if(this.data.admin){
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
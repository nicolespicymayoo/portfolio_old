import React from 'react';
import './Admin.css';
import { LoginForm } from './LoginForm.jsx';
import { RequestItem } from './RequestItem.jsx';


export const Admin = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		Meteor.subscribe('allRequests');
		return{
			requestList: Requests.find().fetch()
		}
	},
	renderRequests(){
		return this.data.requestList.map(function(request){
			console.log(request.name);
			return (
				<RequestItem 
					key={request._id}
					name={request.name}
					email={request.email}
					text={request.text}
				/>
			)
		})
	},
	render(){
		return(
			<div className="admin-page">
				<div className="admin-login-form">
					<LoginForm />
				</div>
				<div className="admin-request-list">
					{this.renderRequests()}
				</div>
			</div>
		)
	}
})
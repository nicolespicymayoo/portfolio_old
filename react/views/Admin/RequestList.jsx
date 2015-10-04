import React from 'react';
import './RequestList.css';
import { RequestItem } from './RequestItem.jsx';

export const RequestList = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		Meteor.subscribe('allRequests');
		return{
			requestList: Requests.find().fetch()
		}
	},
	renderRequests(){
		return this.data.requestList.map(function(request){
			return (
				<RequestItem 
					key={request._id}
					name={request.name}
					email={request.email}
					text={request.text}
					date={request.date}
				/>
			)
		})
	},
	render(){		
		return(
				<div>
					<div className="request-list-header">
						Requests
					</div>
					<div className="request-list">
						{this.renderRequests()}
					</div>
				</div>
		)
	}
});
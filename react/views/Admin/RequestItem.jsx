import React from 'react';
import moment from 'moment';
import './RequestItem.css';

export const RequestItem = React.createClass({
	render(){
		var date = moment(this.props.date).format('dddd, MMM D YYYY, h:m a');
		return(
			<div className="request-item">
				<p>{this.props.name}</p>
				<p>{this.props.email}</p>
				<p className="text">{this.props.text}</p>
				<p className="date">{date}</p>
			</div>
		)
	}
});
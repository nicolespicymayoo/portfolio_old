import React from 'react';
import {Link} from 'react-router';
import './Navbar.css';

export const Navbar = React.createClass({
	render(){
		return(
			<div className="navbar clearfix">
				<div className="navbar-tabs-container">
					<Link
						to="/"
						className="navbar-tab"
						activeClassName="active"
					>
						home
					</Link>

					<Link
						to="/our-services"
						className="navbar-tab"
						activeClassName="active"
					>
						services

					</Link>

					<Link
						to="/our-portfolio"
						className="navbar-tab"
						activeClassName="active"
					>
						portfolio
					</Link>
					
					<Link
						to="/contact-us"
						className="navbar-tab"
						activeClassName="active"
					>
						contact
					</Link>
				</div>
			</div>
		)
	}
});

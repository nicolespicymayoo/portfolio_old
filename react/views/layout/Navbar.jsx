import React from 'react';
import {Link} from 'react-router';
import './Navbar.css';

export const Navbar = React.createClass({
	render(){
		return(
			<div className="navbar">
				<Link
					to="/"
					className="navbar-tab"
					activeClassName="active"
				>
					home
				</Link>

				<Link
					to="/our-portfolio"
					className="navbar-tab"
					activeClassName="active"
				>
					portfolio
				</Link>
				<Link
					to="/about-us"
					className="navbar-tab"
					activeClassName="active"
				>
					about

				</Link>
				<Link
					to="/contact-us"
					className="navbar-tab"
					activeClassName="active"
				>
					contact
				</Link>
			</div>
		)
	}
});

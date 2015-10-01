import React from 'react';
import {Navbar} from './Navbar.jsx';
import './Layout.css';

export const Layout = React.createClass({
  render(){
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});
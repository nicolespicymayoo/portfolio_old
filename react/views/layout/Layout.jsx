import React from 'react';
import {Navbar} from './Navbar.jsx';
import '../../css/_base.css';

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
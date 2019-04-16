import React from 'react'
import {withRouter, Link,} from 'react-router-dom'
import './Header.css';
import rectangle from './../../resources/img/mediform1-rectangle@2x.png'
import heart from './../../resources/img/mediform1-path-6@2x.png'

function Header(props){
  return (
    <div className={`header-nav`}>
      <div className="logo-content">
        <img className='heart' src={heart} alt='heart'/>
        <div className='site-name'>
          <h1>Senior Coverage</h1>
          <h2>Powered by Ocean Insurance Quotes</h2>
        </div>
      </div>
      <div className='logo-content'>
      <Link to={`/${props.location.search}`}><div className='home'> Home </div></Link>
        <div className='contact-agent'>
          <h1>Speak to a licensed Agent:</h1>
          <h2>1-800-555-5555</h2>
        </div>
        <img className='svg-rectangle' src={rectangle} alt='svg rectangle'/>
      </div>
    </div>
  );
}

export default withRouter(Header);
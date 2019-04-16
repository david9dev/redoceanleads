import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Footer.css';

function Footer(props)
{
  return(
    <footer className="landing-footer">
      <div className='footer-container'>
        <span>© Copyright 2019 YourSeniorCoverage.com. All rights reserved.</span>
        <div className='privacy-terms'>
          <Link to={`/privacy/${props.location.search}`}><div className="links">Privacy Policy</div></Link>
          <div className='vertical-line'/>
          <Link to={`/terms/${props.location.search}`} className="terms"><div className="links" >Terms And Conditions</div></Link>
        </div>
      </div>
    </footer>
  )
}

export default withRouter(Footer);
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
  // componentDidMount()
  // {
  //   this.querys = {};
  //   const searches = this.props.location.search.split('&');
  //   const firstQuery = searches[0].split('');
  //   firstQuery.shift();
  //   searches[0] = firstQuery.join('');
  //   searches.forEach((curVal) =>
  //   {
  //     const keyValue = curVal.split('=');
  //     this.querys[keyValue[0]] = keyValue[1];
  //   })
  //   // console.log(test)
  //   // console.log(this.querys);


  //   // console.log(searches);
  // }
  handleComparePlans()
  {
    this.props.history.push(`/form/step1/${this.props.location.search}`);
  }
  render() {
    return (
      <div>
        <div className="above-fold">
          <div className="landing-info">
            <h1>Compare 2019 Medicare Supplemental Plans</h1>
            <h2>Expand your coverage today with affordable plans to get you the coverage you need.</h2>
            <div className='zip-input'>
              <input name='zip' value={this.props.zip}placeholder='Zip code' onChange={(event) => this.props.save(event)}/>
              <button onClick={() => this.handleComparePlans()}>Compare plans now</button>
            </div>
          </div>
        </div>
        <div className='placeholder'/>
        <div className='sectiona first-section'>
          <h1 className='section-header'>Why should I use Your Senior Coverage Insurance Quotes?</h1>
          <p className='section-body'><span>YourSeniorCoverage.com</span> matches you with local agents to help you find the best 
          policy to fit your needs as well as your budget.  We help you to find a policy that can save you 
          money on your medical needs.</p>
        </div>
        <div className='sectionb'>
          <h1 className='section-header'>How much does it cost to use your service?</h1>
          <p className='section-body'>Nothing!  We match you with local professionals at no charge to you.  This service is to help you find a policy that fits your needs and find out if Medicare Supplement policies can fit those needs.</p>
        </div>
        <div className='sectiona'>
          <h1 className='section-header'>What if I don’t know what plan I need?</h1>
          <p className='section-body'>Our local professionals will help you to learn about your options as well as get you coverage for the things most important to you.</p>
        </div>
        <div className='sectionb'>
          <h1 className='section-header last-section'>What If I Already Have A Medicare Supplement Plan?</h1>
          <p className='section-body'>If you already have a Medicare Supplement Plan, but want to change your coverage or decrease your premiums, our local agents can help you to find a new policy to match your needs.  You can change your Medicare Supplement Plan any time of the year.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
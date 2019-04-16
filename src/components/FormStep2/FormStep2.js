import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import formValidation from '../formValidation/logicForm2'
import getState from './../zipToState/zipToState'
import './FormStep2.css'

class FormStep2 extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      errors: {
       email: '',
       phone: '',
       address: '',
       city: '',
       state: '',
       zip: ''
      }
    }
    this.tcpa = 'By clicking “Submit” I provide my signature expressly consenting to marketing contact from one or more of the companies LISTED HERE and its partner companies or its subsidiaries, affiliates, or agents at the number I provided regarding Medicare supplement, Medicare Advantage, and prescription drug insurance plans via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Agents are not connected with or endorsed by the U.S. government or the federal Medicare program. I also have read and agree to the Terms and Conditions and Privacy Policy of this website.';
 }
  handleIdCollection()
  {
    const querys = {};
    const searches = this.props.location.search.split('&');
    const firstQuery = searches[0].split('');
    firstQuery.shift();
    searches[0] = firstQuery.join('');
    searches.forEach((curVal) =>
    {
      const keyValue = curVal.split('=');
      querys[keyValue[0]] = keyValue[1];
    })
    return querys
  }
  handleBack()
  {
    this.props.history.push(`/form/step1/${this.props.location.search}`);
  }
  handleSubmit(event)
  {
    event.preventDefault();
    const querys = this.handleIdCollection();
    const formValue = event.target['xxTrustedFormCertUrl'].value.split('/');
    const trustedFormKey = formValue[formValue.length - 1]
    const newErrors = formValidation(this.props.info);
    if(newErrors.empty)
    {
      this.props.submit(trustedFormKey, this.tcpa, querys);
      this.props.history.push(`/thankyou`);
      window.scrollTo(0, 0);
    }
    else{
      this.setState({
        errors: newErrors.list
      })
    }
  }
  // phoneFormat()
  // {
  //   const {phone} = this.props.info;
  //   const length = phone.length;

  //   // if(length >= 11)
  //   // {
  //   //   const phoneCopy = phone.split('');
  //   //   phoneCopy.splice(3, 0, '-');
  //   //   phoneCopy.splice(7, 0, '-');
  //   //   return phoneCopy.join('');
  //   // } 
  //   // else 
  //   if(length >= 6)
  //   {
  //     const phoneCopy = phone.split('');
  //     phoneCopy.splice(3, 0, '-');
  //     phoneCopy.splice(7, 0, '-');
  //     return phoneCopy.join('');
  //   } 
  //   else if(length === 3)
  //   {
  //     return phone + '-'
  //   } 
  //   return phone
  // }
  render() {
    const {email, address, city, state, zip, phone} = this.props.info
    return (
      <div className='step1' ref={this.step1ref}>
        <h1 className='intro'>Compare plans in {getState(this.props.zip, true)} today</h1>
        <form className='form' onSubmit={(event) => this.handleSubmit(event)}>
          <div className='inputs'>
            <div className="column">
              <h1>Step 1</h1>
              <div style={{height: '19px'}}/>
              <p className='requirement'>All feilds required</p>
              <h3>Email</h3>
              <input className='form-input' value={email} name='email' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.email}</p>
              <h3>Address</h3>
              <input className='form-input' value={address} name='address' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.address}</p>
              <h3>State</h3>
              <input className='form-input' value={state} name='state' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.state}</p>
            </div>
            <div className="column">
              <h1>Step 2</h1>
              <div className='gradient-bar'/>
              <div className='place-holder'/>
              <h3>Phone number</h3>
              <input className='form-input' value={phone} name='phone' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.phone}</p>
              <h3>City</h3>
              <input className='form-input' value={city} name='city' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.city}</p>
              <h3>Zip</h3>
              <input className='form-input' value={zip} name='zip' onChange={(event) => this.props.save(event)} />
              <p className='error'>{this.state.errors.zip}</p>
            </div>
          </div>
          <div className='item'>
            <div className='next'onClick={() => this.handleBack()}><div className='back'>{'< Back'}</div></div>
            <div style={{width: '30px'}}/>
            <button className='next'>Submit ></button>
          </div>
          <input ref="leadid_token" name="universal_leadid" type="hidden" value=""/>
          <p className='tcpa-language'>By clicking “Submit” I provide my signature expressly consenting to marketing contact from one or more of the companies <Link to={`/listed/${this.props.location.search}`}><span>LISTED HERE</span></Link> and its partner companies or its subsidiaries, affiliates, or agents at the number I provided regarding Medicare supplement, Medicare Advantage, and prescription drug insurance plans via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Agents are not connected with or endorsed by the U.S. government or the federal Medicare program. I also have read and agree to the Terms and Conditions and Privacy Policy of this website.</p>
        </form>
      </div>
    );
  }
}

export default withRouter(FormStep2);
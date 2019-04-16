import React, {Component} from 'react';
import formValidation from '../formValidation/logicForm1'
import {withRouter} from 'react-router-dom';
import getState from './../zipToState/zipToState'
import './FormStep1.css';

class FormStep1 extends Component {
  state = {
    errors: {
      firstname: '',
      lastname: '',
      dateOfBirth:'',
      tobacco: '',
      inches: '',
      feet: '',
      weight: '',
      gender: ''
    }
  }
  handleNext()
  {
    const newErrors = formValidation(this.props.info);
    if(newErrors.empty)
    {
      this.props.calcAge(this.props.info.dateOfBirth)
      this.props.history.push(`/form/step2/${this.props.location.search}`)
      window.scrollTo(0, 0);
    }
    else
    {
      this.setState({
      errors: newErrors.list
      })
    }
  }
  render() {
    const {firstname, lastname, dateOfBirth, inches, feet, weight} = this.props.info
    return (
      <div className='step1'>
        <h1 className='intro'>Compare plans in {getState(this.props.zip, true)} today</h1>
        <div className='form'>
          <div className='inputs'>
            <div className="column">
              <h1>Step 1</h1>
              <div className='gradient-bar'/>
              <p className='requirement'>All feilds required</p>
              <h3>First name</h3>
              <input className='form-input' value={firstname} name='firstname' placeholder='ex. John' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.firstname}</p>
              <h3>Date of Birth</h3>
              <input className='form-input' value={dateOfBirth} placeholder='MM/DD/YYYY' name='dateOfBirth' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.dateOfBirth}</p>
              <h3>Height (feet)</h3>
              <input className='form-input' value={feet} name='feet' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.feet}</p>
              <h3>Gender</h3>
              <select className='form-input' name='gender' onChange={(event) => this.props.save(event)}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <p className='error'>{this.state.errors.gender}</p>
            </div>
            <div className="column">
              <h1>Step 2</h1>
              <div style={{height: '19px'}}/>
              <div className='place-holder'/>
              <h3>Last name</h3>
              <input className='form-input' value={lastname} name='lastname' placeholder='ex. Smith' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.lastname}</p>
              <h3>Tobacco use?</h3>
              <select className='form-input' name='tobacco' onChange={(event) => this.props.save(event)}>
                <option></option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <p className='error'>{this.state.errors.tobacco}</p>
              <h3>Height (inches)</h3>
              <input className='form-input' value={inches} name='inches' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.inches}</p>
              <h3>Weight (lbs)</h3>
              <input className='form-input' value={weight} name='weight' onChange={(event) => this.props.save(event)}/>
              <p className='error'>{this.state.errors.weight}</p>
            </div>
          </div>
          <button className='next' onClick={() => this.handleNext()}>Next ></button>
        </div>
      </div>
    );
  }
}

export default withRouter(FormStep1);
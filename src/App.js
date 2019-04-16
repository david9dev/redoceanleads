import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import FormStep1 from './components/FormStep1/FormStep1';
import FormStep2 from './components/FormStep2/FormStep2';
import Thankyou from './components/Thankyou/Thankyou';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Listed from './components/Listed/Listed';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer'
import validInput from './components/formValidation/validInput'
import './reset.css';
/*
things that are missing
-the phone number
-.env stuff
- trans sub and pub id's
- figure out how to get the id's off the url. 
 */
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      tobacco: false,
      inches: "",
      feet: "",
      weight: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      age: ""
    }
  }
  handleUpdateAge()
  {
    const curYear = new Date().getFullYear();
    const userYear = this.state.dateOfBirth.split('/')[2];
    this.setState({age: `${curYear - userYear}`});
  }
  handleFormSubmition(formKey, tcpa, querys)
  {
    const leadIdToken = document.getElementById('leadid_token').value
    axios.post('/api/post', {formKey, form: this.state, tcpa, leadIdToken, querys}).then((response) =>
    {
      console.log(response.data);
    }).catch((error) =>
    {
      console.log(error);
    })
  }
  handleChange(event)
  {
    const {value, name} = event.target;
    const protectedInput = validInput(this.state[name], value, name)
    this.setState({[event.target.name]: protectedInput })
  }
  render() {
    // console.log(this.state.email)
    const { firstname, lastname, dateOfBirth, tobacco, inches, feet, weight, gender, email, phone, address, city, state, zip} = this.state
    const step1info = { firstname, lastname, dateOfBirth, tobacco, inches, feet, weight, gender,}
    const step2info = { email, phone, address, city, state, zip }
    return (
      <div>
        <Router>
        <Header/>
          <Switch>
            <Route path='/form/step1' render={() => <FormStep1 info = {step1info} save = {(event) => this.handleChange(event)} zip={this.state.zip} calcAge = {() => this.handleUpdateAge()}/>}/>
            <Route path='/form/step2' render={() => <FormStep2 info = {step2info} save = {(event) => this.handleChange(event)} zip={this.state.zip} submit = {(formKey, tcpa, querys) => this.handleFormSubmition(formKey, tcpa, querys)}/>}/>
            <Route path='/thankyou' render={() => <Thankyou/>}/>
            <Route path='/listed' render={() => <Listed/>}/>
            <Route path='/privacy' render={() => <PrivacyPolicy/>}/>
            <Route path='/terms' render={() => <Terms/>}/>
            <Route path='/' render={() => <Landing zip={this.state.zip} save = {(event) => this.handleChange(event)}/>}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;

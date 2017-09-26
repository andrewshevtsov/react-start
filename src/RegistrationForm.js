import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    
    // привязали this дабы не потерять контекст
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form is submitted. Email value is', this.state.email);
  }

  handleEmailChange(event) { // event input'а, в котором содержится value
    console.log('email was changed', event.target.value);

    // меняем значение в state при вызове handleEmailChange
    this.setState({email: event.target.value});
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="emailField"
            />
            <button className="submitButton">Save</button>
          </form>
        );
  }
}

export default RegistrationForm;
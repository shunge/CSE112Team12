import React, { PropTypes } from 'react';
import PhoneForm from '../components/PhoneForm.jsx';
import Phone from '../../js/phone.js'

class PhoneVerificator extends React.Component {  
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      test: {
        format: '',
        phoneNumber: ''
      }
    };
    this.phone =  new Phone();
    this.changeTest = this.changeTest.bind(this);
    this.onClickSetFormat = this.onClickSetFormat.bind(this);
    this.onClickIsValidPhoneNumber = this.onClickIsValidPhoneNumber.bind(this);
  }

  onClickIsValidPhoneNumber(event) {
    const strNumToCheck = encodeURIComponent(this.state.test.phoneNumber);
    if(this.phone.isValidPhoneNumber(strNumToCheck)){
      alert("The phone number is valid");
    }else{
      alert("The phone number is invalid");
    }
     
  }

  onClickSetFormat(event) {
    const format = this.phone.convertToRegex(encodeURIComponent(this.state.test.format));
    this.phone.setFormat(format);
    alert("Format updated to "+format); 
  }
  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeTest(event) {
    const field = event.target.name;
    const test = this.state.test;
    test[field] = event.target.value;

    this.setState({
      test
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <PhoneForm
        onChange={this.changeTest}
        onClickSF={this.onClickSetFormat}
        onClickVF={this.onClickIsValidPhoneNumber}
        errors={this.state.errors}
        test={this.state.test}
      />
    );
  }

}

export default PhoneVerificator;

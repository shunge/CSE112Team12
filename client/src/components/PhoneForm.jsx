import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const PhoneForm = ({
  onChange,
  onClickSF,
  onClickVF,
  errors,
  test
}) => (
  <Card className="container">
    <form action="/">
      <h2 className="card-heading">Check Format</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          id="format"
          floatingLabelText="Format"
          name="format"
          errorText={errors.format}
          onChange={onChange}
          value={test.format}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="button" onClick={onClickSF} label="Set Format" primary />
      </div>

      <div className="field-line">
        <TextField
          id="phoneNumber"
          floatingLabelText="Phone Number"
          name="phoneNumber"
          onChange={onChange}
          errorText={errors.phoneNumber}
          value={test.phoneNumber}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="button" onClick={onClickVF} label="Check" primary />
      </div>

    </form>
  </Card>
);

PhoneForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClickSF: PropTypes.func.isRequired,
  onClickVF: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  test: PropTypes.object.isRequired
};

export default PhoneForm;

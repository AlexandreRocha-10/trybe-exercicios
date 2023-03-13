// src/components/Form.jsx
import React, { Component } from 'react';
import NameInput from './NameInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
  }

  render() {
    const { name, email } = this.state;

    return (
      <div>
        <h1>- Estados e React</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <NameInput name={ name } handleChange={ this.handleChange } />

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>

          </fieldset>

        </form>
      </div>
    );
  }
}

export default Form;
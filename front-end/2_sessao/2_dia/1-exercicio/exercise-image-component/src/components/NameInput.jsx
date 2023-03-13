// src/components/NameInput.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameInput;
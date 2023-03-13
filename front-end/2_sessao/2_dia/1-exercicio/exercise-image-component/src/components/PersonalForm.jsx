import React, { Component } from 'react'

export default class PersonalForm extends Component {

  render() {
    const {name, email, handleChange } = this.props;

    return (
      <div>
        <fieldset>
            <legend>Informações pessoais</legend>
            <label htmlFor="nome">
                Nome:
                <input 
                    type="text" 
                    name="nome" 
                    id="nome"
                    maxLength="40"
                    onChange={handleChange}
                    value={name}
                    required
                />
            </label>
            <label htmlFor="email">
                Email:
                <input
                    id="email"
                    type="email"
                    name="email"
                    maxLength="50"
                    onChange={handleChange}
                    value={email}
                    required
                />
            </label>
        </fieldset>
      </div>
    )
  }
}

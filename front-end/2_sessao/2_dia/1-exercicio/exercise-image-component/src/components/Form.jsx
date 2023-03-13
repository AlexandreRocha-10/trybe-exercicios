import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

export default class Form extends Component {
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
        });
    }

    render() {
        const { name, email } = this.state;
        return (
            <div>
                <PersonalForm name={ name } email={ email } handleChange={ this.handleChange }/>
            </div>
        )
    }
}

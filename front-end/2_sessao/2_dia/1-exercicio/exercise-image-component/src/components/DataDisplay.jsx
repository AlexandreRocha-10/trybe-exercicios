import React, { Component } from 'react'

export default class DataDisplay extends Component {
  render() {
    const { name, email } = this.props;
    return (
        <div>
            <h2>Dados enviados</h2>
            <h3>Pessoal</h3>
            <div>
                Name:
                {' '}
                <span>
                    { name }
                </span>
                </div>
                <div>
                Email:
                { ' ' }
                <span>
                    { email }
                </span>
            </div>
        </div>
    )
  }
}

import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_RECORD':
      return {
        ...state,
        records: state.records.filter(record => record.id !== action.payload)
      };
    case 'ADD_RECORD':
      return {
        ...state,
        records: [action.payload, ...state.records]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    records: [
      {
        id: 1,
        date: '2019-01-01',
        description: 'Rent',
        amount: '$625'
      },
      {
        id: 2,
        date: '2018-12-05',
        description: 'Fuel',
        amount: '$33'
      },
      {
        id: 3,
        date: '2018-12-23',
        description: 'AirBnb',
        amount: '$234'
      },
      {
        id: 4,
        date: '2018-12-14',
        description: 'Cat food',
        amount: '$6'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

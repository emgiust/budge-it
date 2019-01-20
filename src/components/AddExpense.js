import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddExpense extends Component {
  state = {
    date: '',
    description: '',
    amount: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { date, description, amount } = this.state;

    //check for errors
    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }

    if (description === '') {
      this.setState({ errors: { description: 'Description is required' } });
      return;
    }

    if (amount === '') {
      this.setState({ errors: { amount: 'Amount is required' } });
      return;
    }

    const newRecord = {
      id: uuid(),
      date,
      description,
      amount
    };

    dispatch({ type: 'ADD_RECORD', payload: newRecord });

    //clear state
    this.setState({
      date: '',
      description: '',
      amount: '',
      errors: {}
    });

    //redirect
    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { date, description, amount, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Expense</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Date"
                    name="date"
                    type="date"
                    placeholder=""
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                  <TextInputGroup
                    label="Description"
                    name="description"
                    placeholder="Description.."
                    value={description}
                    onChange={this.onChange}
                    error={errors.description}
                  />
                  <TextInputGroup
                    label="Amount"
                    name="amount"
                    placeholder="Amount.."
                    value={amount}
                    onChange={this.onChange}
                    error={errors.amount}
                  />
                  <input
                    type="submit"
                    value="Add Expense"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddExpense;

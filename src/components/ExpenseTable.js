import React, { Component } from 'react';
import ExpenseRow from './ExpenseRow';
import { Consumer } from '../context';

class ExpenseTable extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { records } = value;

          const listItems = records.map(record => (
            <ExpenseRow key={record.id} record={record} />
          ));

          return (
            <table className="table mt-2 table-striped w-75 mx-auto">
              <thead>
                <tr>
                  <th scope="col">
                    <h4>Date</h4>
                  </th>
                  <th scope="col">
                    <h4>Description</h4>
                  </th>
                  <th scope="col">
                    <h4>Amount</h4>
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{listItems}</tbody>
            </table>
          );
        }}
      </Consumer>
    );
  }
}

export default ExpenseTable;

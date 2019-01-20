import React, { Component } from 'react';
import { Consumer } from '../context';

class ExpenseRow extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_RECORD', payload: id });
  };

  render() {
    const { id, date, description, amount } = this.props.record;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <React.Fragment>
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{amount}</td>
                <td>
                  <i
                    className="fas fa-times"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </td>
              </tr>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ExpenseRow;

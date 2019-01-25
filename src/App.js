import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import About from './pages/About';
import ExpenseTable from './components/ExpenseTable';
import AddExpense from './components/AddExpense';
import NotFound from './pages/NotFound';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="m-5">
              <div className="row">
                <div className="col-xl mt-2">
                  <Switch>
                    <Route exact path="/" component={ExpenseTable} />
                    <Route exact path="/expense/add" component={AddExpense} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Input from './Input'
import History from './History'
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor ()
  {
    super()
    this.state = {
        expression: "",
        history: []
    }
  }

  exec (e)
  {
    e.preventDefault()
    this.setState({
      expression: '',
      history: this.state.history.concat({
        expression: this.state.expression,
        result: this.calc(this.state.expression)
      })
    })
  }

  calc ()
  {
    try {
      eval(this.state.expression)
    } catch (e) {
      return ""
    }
    return eval(this.state.expression)
  }

  handleInputChange (expression)
  {
     console.log(expression)
    if (/([0-9]|\+|\-|\*|\/|\s|^$)/.exec(expression))
    {
      this.setState({expression})
    }
  }

  insertHistoryResult (item)
  {
    console.log(this.state.expression + item.result)
    this.setState({expression: this.state.expression + item.result})
  }

  render()
  {
    return (
      <div id="app">
        <History
          history={this.state.history}
          handleItemClick={this.insertHistoryResult.bind(this)}
        />
        <form onSubmit={this.exec.bind(this)}>
          <Input
            expression={this.state.expression}
            handleChange={this.handleInputChange.bind(this)}
          />
          <div id="result">{this.calc()}</div>
        </form>
      </div>
    );
  }
}

export default App;

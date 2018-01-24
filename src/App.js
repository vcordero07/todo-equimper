import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteAllTodo,
} from './actions/todosActions';
import './App.css';

class App extends Component {
  state = {
    todo: '',
  };

  _onChange = e => this.setState({ todo: e.target.value });

  _onSubmit = e => {
    e.preventDefault();

    this.props.dispatch(addTodo(this.state.todo));

    this.setState({ todo: '' });
  };

  _onChecked = id => {
    this.props.dispatch(toggleTodo(id));
  };

  _deleteTodo = id => {
    this.props.dispatch(deleteTodo(id));
  };

  _getTodosCompletedLength = () => {
    return this.props.todos.filter(todo => todo.completed).length;
  };

  _deleteAll = () => {
    this.props.dispatch(deleteAllTodo());
  };

  render() {
    return (
      <div className="App">
        <h1>My todos to {this.props.username}</h1>
        <h4>
          {this._getTodosCompletedLength()} / {this.props.todos.length}{' '}
          completed
        </h4>
        <hr />
        <form onSubmit={this._onSubmit}>
          <input
            value={this.state.todo}
            onChange={this._onChange}
            placeholder="Add a new todo..."
          />
        </form>

        <br />
        <br />
        <br />

        {this.props.todos.map(todo => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h4
              style={{
                textDecoration: todo.completed ? 'line-through' : undefined,
              }}
            >
              {todo.text}
            </h4>
            <input
              onChange={() => this._onChecked(todo.id)}
              type="checkbox"
              checked={todo.completed}
            />
            {todo.completed && (
              <button onClick={() => this._deleteTodo(todo.id)}>Delete</button>
            )}
          </div>
        ))}

        <hr />

        <button onClick={this._deleteAll}>Delete All Completed Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  username: state.username,
});

export default connect(mapStateToProps)(App);

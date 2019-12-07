import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTYpes from 'prop-types';


class Todos extends Component {
    //go in app.js coz state in app put down props
// markComplete = () => {
// console.log('hi')
// }

  render() {
  return this.props.todos.map((todo) => (
     <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
  ));
  }
  }

  
  Todos.propTypes = {
    todos: PropTYpes.array.isRequired,
    markComplete: PropTYpes.func.isRequired,
    delTodo: PropTYpes.func.isRequired
  }

export default Todos;
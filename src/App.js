import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true, deleted: false },
        { description: 'Throw the dishes away', isCompleted: false, deleted: false },
        { description: 'Buy new dishes', isCompleted: false, deleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false, deleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todos.isCompleted ? false : true;
    this.setState({ todos: todos });
}

  deleteTodo(id) {
    const newArr = this.state.todos.filter( todos => todos.id != id);
    this.setState({ todos: newArr});
    console.log (newArr);
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index, id) =>
            <ToDo key={ index } id={todo.id} deleteTodo={this.deleteTodo.bind(this)} description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} />
          )}
        </ul>
        <form onSubmit= { (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

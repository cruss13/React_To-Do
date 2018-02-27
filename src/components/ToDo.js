 import React, { Component } from 'react';

 class ToDo extends Component {
  render() {
    return (
      const Todo = ({ description, id, isCompleted, toggleComplete, onDelete }) =>
        <li>
          <input type="checkbox" checked={isCompleted} onChange={toggleComplete} />
          <button onClick={() => onDelete(id)}>DELETE</button>
          <span>{description}</span>
        </li>
    );
  }
}

 export default ToDo;

import React, { Component } from 'react';

class ToDo extends Component {
  deleteToDo(id) {
      this.props.deleteToDo(id);
    }
      render() {
        return (
          <div className="wrapper">

          <button className="deleteToDo" onClick = {(e) =>
              this.deleteToDo(this.props.id)}>DELETE</button>
              {() => this.props.deleteToDo(this.props.id)}

          <li>
            <input type="checkbox" checked={ this.props.isCompleted }
    onChange={ this.props.toggleComplete } />
            <span>{ this.props.description }</span>
          </li>
          </div>
        );
      }
    }

export default ToDo;

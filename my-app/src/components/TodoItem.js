import React, { Component } from 'react';
import PropTYpes from 'prop-types';

export class TodoItem extends Component {
getStyle= () => {
    return {
        backgroun: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc solid',
     textDecoration: this.props.todo.completed ? 'Line-through' : 'none'   
     }
    }
// instead of markComplete.props and go to in Todo above the class right again and in TodoItem create markComplete as following
    // markComplete = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


 
TodoItem.propTypes = {
    todo: PropTYpes.object.isRequired,
    markComplete: PropTYpes.func.isRequired,
    delTodo: PropTYpes.func.isRequired
  }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
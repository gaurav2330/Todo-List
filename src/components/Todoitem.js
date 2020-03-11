import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () =>{
       return {
           background: '#90ccf4',
           padding: '10px',
           margin: '5px',
           borderBottom: '1px none',
           fontFamily: 'Helvetica, Verdana',
           textDecoration: this.props.todo.completed ?  'line-through' : 'none'
       }
    }

    render() {
        const{ id, description}=this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type='checkbox' className="check" onChange={this.props.markComplete.bind(this,id)} /> {'  '}
                    {description}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#000',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

Todoitem.propTypes={
    todo: PropTypes.object.isRequired
}

export default Todoitem

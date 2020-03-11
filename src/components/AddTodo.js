import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        description: ''
    }

    onChange =(e) => this.setState({[e.target.name]: e.target.value});

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.description);
        this.setState({description: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="description"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />    
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />    
            </form>
        )
    }
}

export default AddTodo

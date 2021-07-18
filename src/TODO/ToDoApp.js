import React, { Component } from 'react';
import './ToDo.css';

class TODoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return(
            <div>
                <h1>TODO Application</h1>
                <div className="todo">
                    <ToDoList items={this.state.items} />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="inputElement">What needs to be done?</label>
                        <br />
                        <input type="text" id="inputElement" onChange={this.handleChange} value={this.state.text} />
                        <br/>
                        <button>ADD {this.state.items.length + 1 }</button>
                    </form>
                </div>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        
        this.setState({
            items: this.state.items.concat(newItem),
            text: ''
        });
    }
}

export default TODoApp;

class ToDoList extends Component {
    render() {
        return (
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
        )
    }
}

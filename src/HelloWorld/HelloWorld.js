import React, { Component } from 'react';
import TODoApp from '../TODO/ToDoApp';
class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0}
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    componentDidMount() {
        this.intervel = setInterval(() => {
            this.tick();
        }, 1000)
    }

    render() {
        return (
            <div>
                Hello {this.props.name}
                <br />
                Seconds: {this.state.seconds}
            </div>
        )
    }
}
export default  HelloWorld;
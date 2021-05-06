import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: "Hello World"
        }
    }

    render() {
        return (
            <h1>{this.state.statement}</h1>
        )
    }
}
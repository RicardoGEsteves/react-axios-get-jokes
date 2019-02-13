import React, { Component } from 'react';
import { fetchJokes } from '../actions/index';

export default class Jokes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: []
        };
    }

    renderJokes() {
        const jokes = this.state.jokes;

        if (jokes.length !== 0) {
            return jokes.map(joke => <p key={joke.id}>{joke.value}</p>);
        }
        // return jokes.map((joke) => {
        //   return (
        //     <p>{joke.value}</p>
        //   )
        // })
        return;
    }
    async componentDidMount() {
        const jokes = await fetchJokes();

        this.setState({ jokes });
        // console.log(jokes);
    }
    render() {
        return <div>{this.renderJokes()}</div>;
    }
}

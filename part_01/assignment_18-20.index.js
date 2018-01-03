import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        votes: Array.apply(null, Array(this.props.anecdotes.length)).map(Number.prototype.valueOf,0)
      }
      this.setRandomJoke = this.setRandomJoke.bind(this)
      this.voteForJoke = this.voteForJoke.bind(this)
    }
  
    setRandomJoke(){
        const len = this.props.anecdotes.length;
        const random = Math.floor((Math.random() * (len)));
        this.setState({selected: random})
    }

    voteForJoke(){
        let temp = this.state.votes;
        temp[this.state.selected]++;
        this.setState({votes: temp})
        console.log(this.state.votes)
    }

    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <br />
                <button type="button" onClick={this.voteForJoke}>vote</button>
                <button type="button" onClick={this.setRandomJoke}>get me another anecdote</button>
                <br />
                <h1>anecdote with moest votes:</h1>
                
                {this.props.anecdotes[
                    this.state.votes.findIndex(
                        el => el===Math.max(...this.state.votes)
                    )
                ]}<br />
                has {Math.max(...this.state.votes)} votes
            </div>
        )
    }
  }

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
registerServiceWorker();

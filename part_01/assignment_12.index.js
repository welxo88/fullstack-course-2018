
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (<h1>{props.teksti}</h1>)
}

const Palaute = (props) => {
    return (
        <div>
        <button type="button"  onClick={props.onclickfunc('hyva')}>hyvä</button>
        <button type="button">neutraali</button>
        <button type="button">huono</button>
    </div>
    )
}

const Yhteenveto = (props) => {
    return (
        <div>
            hyvä: {props.tiedot.hyva} <br />
            neutraali: {props.tiedot.neutraali} <br />
            huono: {props.tiedot.huono} <br />
        </div>
    )
}


const App = () => {
    this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
    };
    
    const addFeedback = (qual) => {
        let state = this.state;
    state[qual] += state[qual];
    console.log(state);
        this.setState(state);
    }

    return (
        <div>
            <Otsikko teksti="anna palautetta" />
            <Palaute onclickfunc={this.addFeedkack} />
            <Otsikko teksti="statistiikka" />
            <Yhteenveto tiedot={this.state} />
        </div>
    )
}

ReactDOM.render(
<App />,
document.getElementById('root')
)

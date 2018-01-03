import React from 'react';
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (<h1>{props.teksti}</h1>)
}

const PalautePainike = props => <button type="button" onClick={props.func(props.laji)}>{props.teksti}</button>

const Palaute = (props) => {
    return (
        <div>
            {Object.keys(props.tiedot).map(
                rivi => <PalautePainike 
                    key={rivi+"_painike"} 
                    teksti={props.tiedot[rivi].teksti} 
                    laji={rivi} 
                    func={props.onclickfunc} /> 
            )}
        </div>
    )
}

const YhteenvetoRivi = props => <tr><td>{props.laji}:</td><td>{props.maara}</td></tr>

const Yhteenveto = (props) => {
    const getWeights = (a) => Object.keys(a).map(rivi => props.tiedot[rivi].painoarvo);
    const getNums = (a) => Object.keys(a).map(rivi => props.tiedot[rivi].maara);
    const sum = (a,b) => a + b;
    const answersGiven = getNums(props.tiedot).reduce(sum) !== 0
    
    const calcMean = (nums, weights) => {
        if(nums.length === weights.length){
            let resultArray = nums.map((el,id) => el*weights[id]);
            return (resultArray.reduce(sum) / nums.reduce(sum)) 
        } else {
            return undefined;
        }
    }

    const calcPositive = (nums) => {
        return (nums[0] / nums.reduce(sum))*100
    }
    
    return (
        <table><tbody>
        
            {!answersGiven && <tr><td></td><td>yhtään palautetta ei ole annettu</td></tr>}

            {answersGiven && Object.keys(props.tiedot).map(
                rivi => <YhteenvetoRivi 
                    key={rivi+"_yhteeneveto"} 
                    laji={props.tiedot[rivi].teksti} 
                    maara={props.tiedot[rivi].maara} /> 
            )}
            {answersGiven && <tr><td>Keskairvo:</td><td>{calcMean(getNums(props.tiedot),getWeights(props.tiedot))}</td></tr>}
            {answersGiven && <tr><td>Positiivisia:</td><td>{calcPositive(getNums(props.tiedot))} %</td></tr> }  
        </tbody></table>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: {maara: 0, painoarvo: 1, teksti: "hyvä"},
            neutraali: {maara: 0, painoarvo: 0, teksti: "neutraali"},
            huono: {maara: 0, painoarvo: -1, teksti: "huono"},
        }
        this.addFeedback = this.addFeedback.bind(this)
    }
  
    addFeedback = (qual) => () => {
        this.setState((prevState) => (
            {[qual]: {
                maara: prevState[qual].maara + 1, 
                painoarvo: prevState[qual].painoarvo, 
                teksti: prevState[qual].teksti}
            }
        ));

    }

    render() {
        return (
            <div>
                <Otsikko teksti="anna palautetta" />
                <Palaute  tiedot={this.state} onclickfunc={this.addFeedback} />
                <Otsikko teksti="statistiikka" />
                <Yhteenveto tiedot={this.state} />
            </div>
        )
    }
}

export default App;

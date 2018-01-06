import React from 'react';
import axios from 'axios';

//refaktorointi vähän turhaa minusta

const CountryInfo = (props) => {
    return <div>
        <h2>{props.info.name}{props.info.name!==props.info.nativeName && ', '+props.info.nativeName}</h2>
        <p>capital: {props.info.capital}</p>
        <p>population: {props.info.population}</p>
        <img src={props.info.flag} width={400} />
    </div>
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [
                { name: '.' },
            ],
            nameFilter: '',
            filteredCountries: []
        }
    }

    componentWillMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ countries: response.data })
            })
    }

    setFilteredCountries = () => {
        console.log('setFilteredCountries called')
        this.setState({
            filteredCountries:
                this.state.countries.filter(el => {
                    return el.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) > -1
                })
        })
    }

    changeInputValue = (e) => {
        e.preventDefault()
        this.setState({ [e.target.id]: e.target.value }, this.setFilteredCountries)
    }

    selectCountry = (e) => {
        e.preventDefault();
        this.setState({nameFilter:e.target.textContent}, this.setFilteredCountries)
    }

    render() {
        return (
            <div>
                find countries: <input id={'nameFilter'} value={this.state.nameFilter} onChange={this.changeInputValue} />
                <h3>countries</h3>
                {this.state.filteredCountries.length > 10 && 'too many matches, please specify'}
                {this.state.filteredCountries.length <= 10 && this.state.filteredCountries.length !== 1  && 
                    this.state.filteredCountries.map((el) => <div key={'key_' + el.name.replace(' ', '')} onClick={this.selectCountry}>{el.name}</div>)
                }
                {this.state.filteredCountries.length === 1 && <CountryInfo info={this.state.filteredCountries[0]} />}
            </div>
        )
    }
}


export default App;

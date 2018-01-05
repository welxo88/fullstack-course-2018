import React from 'react';
import Kurssi from './Kurssi'

//refaktorointi pienimpiin paloihin tässä kohdin tuntuu tarpeettomalta

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', phone: '040-123456' },
                { name: 'Martti Tienari', phone: '040-123456' },
                { name: 'Arto Järvinen', phone: '040-123456' },
                { name: 'Lea Kutvonen', phone: '040-123456' }
            ],
            newName: 'kirjoita uusi nimi...',
            newPhone: '00-000',
            nameFilter: ''
        }
    }

    changeInputValue = (e) => {
        e.preventDefault()
        this.setState({ [e.target.id]: e.target.value })
    }

    addPerson = (e) => {
        e.preventDefault()
        if (this.state.persons.filter(person => (person.name === this.state.newName)).length > 0) {
            alert('nimi jo listalla!')
        }
        else {
            const toSet = {
                persons: this.state.persons.concat({
                    name: this.state.newName,
                    phone: this.state.newPhone
                }),
                newName: 'kirjoita uusi nimi...',
                newPhone: '00-000'
            }
            this.setState(toSet)
        }
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                rajaa näytettäviä: <input id={'nameFilter'} value={this.state.nameFilter} onChange={this.changeInputValue} />
                <h3>Lisää uusi</h3>
                <form>
                    <div>
                        nimi: <input id={'newName'} value={this.state.newName} onChange={this.changeInputValue} />
                        <br />
                        numero: <input id={'newPhone'} value={this.state.newPhone} onChange={this.changeInputValue} />
                    </div>
                    <div>
                        <button type="submit" onClick={this.addPerson}>lisää</button>
                    </div>
                </form>
                <h3>Numerot</h3>
                {this.state.persons
                    .filter(el => el.name.indexOf(this.state.nameFilter) > -1)
                    .map((el) => <p key={'key_' + el.name.replace(' ', '')}>{el.name}, {el.phone}</p>)}
            </div>
        )
    }
}


export default App;

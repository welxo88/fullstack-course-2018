import React from 'react';
import Kurssi from './Kurssi'

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                { nimi: 'Reactin perusteet', tehtavia: 10, id: 1 },
                { nimi: 'Tiedonvälitys propseilla', tehtavia: 7, id: 2 },
                { nimi: 'Komponenttien tila', tehtavia: 14, id: 3 }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                { nimi: 'Routing', tehtavia: 3, id: 1 },
                { nimi: 'Middlewaret', tehtavia: 7, id: 2 }
            ]
        }
    ]

    let kurrsit_obj = kurssit.map((el)=><Kurssi kurssi={el} />)

    return (
        <div>
            <h1>Opetusohjelma</h1>
            {kurrsit_obj}
        </div>
    )
}

export default App;

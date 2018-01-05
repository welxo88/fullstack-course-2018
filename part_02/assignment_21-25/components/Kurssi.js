import React from 'react';


const Sisalto = (props) => {
    return (
        props.sisalto.map(el => { return <Osa key={el.id} nimi={el.nimi} tehtavia={el.tehtavia} />; })
    )
}

const Osa = (props) => {
    return (<p>{props.nimi} {props.tehtavia}</p>)
}

const Yhteensa = (props) => {
    let counter = props.osat
                    .map((el) => el.tehtavia)
                    .reduce((a, b) => a + b);

    return (<p>yhteensä {counter} tehtävää</p>)
}

const Kurssi = (props) => {
    return (
        <div>
            <h2>{props.kurssi.nimi}</h2>
            <Sisalto sisalto={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
}


export default Kurssi;
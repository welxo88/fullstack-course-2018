
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (<h1>{props.kurssi}</h1>)
}

const Sisalto = (props) => {
  return (
    props.sisalto.map(el => {return <Osa nimi={el.nimi} tehtavia={el.tehtavia} />;})
  )
}

const Osa = (props) => {
  return (<p>{props.nimi} {props.tehtavia}</p>)
}

const Yhteensa = (props) => {
  let counter = 0;
  props.sisalto.forEach(el => {counter += el.tehtavia})
  return (<p>yhteensä {counter} tehtävää</p>)
}

const App = () => {
  const kurssi = {
    nimi: "Half Stack -sovelluskehitys",
    osat: [
      {nimi: 'Reactin perusteet', tehtavia: 10},
      {nimi: 'Tiedonvälitys propseilla', tehtavia: 7},
      {nimi: 'Komponenttien tila', tehtavia: 14},
  ]}

  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto sisalto={kurssi.osat} />
      <Yhteensa sisalto={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

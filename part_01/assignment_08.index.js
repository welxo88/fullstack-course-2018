
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (<h1>{props.kurssi}</h1>)
}

const Sisalto = (props) => {
  return (
    props.sisalto.map(el => {return <Osa osa={el.osa} tehtavia={el.tehtavia} />;})
  )
}

const Osa = (props) => {
  return (<p>{props.osa} {props.tehtavia}</p>)
}

const Yhteensa = (props) => {
  let counter = 0;
  props.sisalto.forEach(el => {counter += el.tehtavia})
  return (<p>yhteensä {counter} tehtävää</p>)
}

const App = () => {
  const kurssi = "Half Stack -sovelluskehitys"
  const sisalto = [
    {osa: 'Reactin perusteet', tehtavia: 10},
    {osa: 'Tiedonvälitys propseilla', tehtavia: 7},
    {osa: 'Komponenttien tila', tehtavia: 14},
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto sisalto={sisalto} />
      <Yhteensa sisalto={sisalto} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

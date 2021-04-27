import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'

import PlanetList from './components/PlanetList'
import DataFetcher from './components/DataFetcher'

function App() {
  const [list, setList] = useState([])
  const [planets, setPlanets] = useState([])
  const [next, setNext] = useState('')
  return (
    <div className="container">
      <h1 className="display-1 text-center">Planète dans l'univers Star Wars</h1>
      <DataFetcher next={next} setNext={setNext} planets={planets} setPlanets={setPlanets} />
      <PlanetList list={list} setList={setList} planets={planets} />
    </div>
  )
}

export default App;

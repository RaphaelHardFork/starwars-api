import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"


const PlanetList = ({ planets, list, setList }) => {
  const handleClickMore = () => {
    console.log('hello')
  }

  return (
    <div>
      <ul className="list">
        {planets.map((elem) => {
          return <li key={elem.name}>{elem.name}</li>
        }
        )}
      </ul>
      <button onClick={handleClickMore} className="btn">Voir plus</button>
    </div>
  )
}

export default PlanetList
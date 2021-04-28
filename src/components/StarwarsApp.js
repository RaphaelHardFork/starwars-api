import { useEffect } from 'react'
import { style, gridS, planetColor } from '../style'

const StarwarsApp = (props) => {
  const { url, pageData, setPageData, setPageUrl } = props

  useEffect(() => {
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      for (let elem of data.results) {
        pageData.push(elem)
      }
      setPageData(() => pageData)
      setPageUrl(() => data.next)
    }).catch((e) => {
      alert(e.message)
    })
    // Problème de "missing dependencies"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])


  return <ul style={gridS} className="row justify-content-between ps-0">
    {pageData.map((elem) => {
      return (
        <div key={elem.name} className="card shadow" style={style}>
          <div className="card-body">
            <h2 className="card-title text-center">{elem.name}</h2>
            <div
              className="card-gradient rounded-pill mx-auto"
              style={{ backgroundImage: planetColor(elem.terrain.split(',')[0]), height: "3rem", width: "3rem" }}
            ></div>
          </div>
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">Climat : {elem.climate}</li>
            <li className="list-group-item">Population : {elem.population}</li>
            <li className="list-group-item">Terrain : {elem.terrain}</li>
          </ul>
          <div className="card-body">
          </div>
        </div>
      )
    })}
  </ul>
}

export default StarwarsApp
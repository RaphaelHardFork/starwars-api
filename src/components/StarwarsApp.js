import { useEffect } from 'react'

const StarwarsApp = (props) => {
  const { url, pageData, setPageData, setPageUrl } = props

  useEffect(() => {
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      // A revoir
      if (pageData.length === 0) {
        setPageData(data.results)
      } else {
        for (let elem of data.results) {
          pageData.push(elem)
        }
        setPageUrl(pageData)
      }
      if (data.next === null) {
        alert('Fin de la liste')
      } else {
        setPageUrl(data.next)
      }
    }).catch((e) => {
      alert(e.message)
    })
  }, [url])
  // style
  const style = {
    backgroundColor: '#AA8888'
  }
  const gridS = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,300px))",
    gridGap: "2rem"
  }
  return <ul style={gridS} className="row justify-content-between ps-0">
    {pageData.map((elem) => {
      return (
        <div class="card shadow mb-3 " style={style}>
          <div class="card-body">
            <h2 class="card-title text-center">{elem.name}</h2>
            <p className="card-text">{elem.diameter}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Climat : {elem.climate}</li>
            <li class="list-group-item">Population : {elem.population}</li>
            <li class="list-group-item">Terrain : {elem.terrain}</li>

          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>


      )
    })}
  </ul>
}

export default StarwarsApp
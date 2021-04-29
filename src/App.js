import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'

import StarwarsApp from './components/StarwarsApp'

const App = () => {
  const [url, setUrl] = useState(`https://swapi.dev/api/planets/`)
  const [pageData, setPageData] = useState([])
  const [pageUrl, setPageUrl] = useState('')

  const handleClickMore = () => {
    setUrl(pageUrl)
  }
  /* FONCTION DEBUG*/
  const handleClickData = () => {
    console.log(`url: ${url}`)
    console.log(`pageUrl: ${pageUrl}(next)`)
    console.log(pageData)
  }

  return (
    <div className="container">
      <h1 className="display-1 text-center my-3">Planète dans l'univers Star Wars</h1>
      <StarwarsApp setPageUrl={setPageUrl} pageUrl={pageUrl} setPageData={setPageData} pageData={pageData} setUrl={setUrl} url={url} />
      <button disabled={pageUrl === null} onClick={handleClickMore} className="btn btn-info mb-5">Voir plus</button>
      <button onClick={handleClickData} className="btn btn-info ms-2 mb-5">Voir les données (console)</button>
    </div>
  )
}


export default App;

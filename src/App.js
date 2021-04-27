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

  return (
    <div className="container">
      <h1 className="display-1 text-center my-3">Planète dans l'univers Star Wars</h1>
      <StarwarsApp setPageUrl={setPageUrl} pageUrl={pageUrl} setPageData={setPageData} pageData={pageData} setUrl={setUrl} url={url} />
      <button disabled={pageUrl === null} onClick={handleClickMore} className="btn">Voir plus</button>
    </div>    /*DISABLED*/
  )
}


export default App;

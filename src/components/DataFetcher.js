import { useEffect, useState } from 'react'

const DataFetcher = ({ planets, setPlanets, next, setNext }) => {

  useEffect(() => {
    let url = `https://swapi.dev/api/planets/`
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      setPlanets(data.results)
    }).catch((e) => {
      alert('hello')
    })
  }, [])
  return <p>Heelo</p>
}

export default DataFetcher
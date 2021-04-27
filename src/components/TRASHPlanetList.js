/*
import { useEffect, useState } from 'react'
const planetTab = []

const PlanetList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    const planetListConstructor = async () => {
      const promiseTab = []
      for (let i = 0; i < 100; i++) {
        promiseTab.push(fetch(`https://swapi.dev/api/planets/${i}/`))
        //let data = await fetch(`https://swapi.dev/api/planets/${i}/`)
        //let planet = await data.json()
        //planetTab.push(planet)
        //console.log(planet)
      }
      let data = await Promise.all(promiseTab)
      data = data.filter((elem) => elem.ok)
      for (let elem of data) {
        planetTab.push(await elem.json())
      }
      console.log(planetTab)
      setList(planetTab)

    }
    planetListConstructor()
  }, [])

  return (
    <p>{planetTab[0]}</p>
  )
}

export default PlanetList
*/
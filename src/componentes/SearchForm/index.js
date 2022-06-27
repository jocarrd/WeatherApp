import React, { useEffect } from 'react'
import OpenWeatherServices from '../../services/OpenWeatherServices'

export default function SearchForm () {
  useEffect(() => {
    OpenWeatherServices.currentWeather().then((data)=>console.log(data))
  }, [])

  return (
        <form>

            <select name="selector">
            </select>

        </form>

  )
}

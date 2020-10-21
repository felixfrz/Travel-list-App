import React, { useContext, useState } from 'react'
import { DataContext } from './context/DataContext'

const AddTravel = () => {
  const { addTravel } = useContext(DataContext)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const addCity = (e) => {
    setCity(e.target.value)
  }
  const addCountry = (e) => {
    setCountry(e.target.value)
  }
  const addSubmit = (e) => {
    e.preventDefault()
    addTravel(city, country)
    setCity('')
    setCountry('')
  }
  return (
    <form onSubmit={addSubmit}>
      <input
        type='text'
        placeholder='Enter City'
        value={city}
        onChange={addCity}
        required
      />
      <input
        type='text'
        placeholder='Enter Country'
        value={country}
        onChange={addCountry}
        required
      />
      <input type='submit' value='Add Travel' />
      
    </form>
  )
}

export default AddTravel

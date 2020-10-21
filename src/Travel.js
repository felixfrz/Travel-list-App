import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

const Travel = (props) => {
  const { removeTravel } = useContext(DataContext)
  const { city, country, id } = props.data
  return (
    <div className='travel' onClick={() => removeTravel(id)}>
      <h3 className='city'>City: {city}</h3>
      <h5 className='country'>Country: {country}</h5>
    </div>
  )
}

export default Travel

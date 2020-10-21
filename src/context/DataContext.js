import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {
  const [datas, setDatas] = useState([
    { city: 'Lagos', country: 'Nigeria', id: 1 },
    { city: 'Paris', country: 'France', id: 2 },
    { city: 'London', country: 'England', id: 3 },
  ])
  const removeTravel = (id) => {
    setDatas(datas.filter((data) => data.id !== id))
  }

  const addTravel = (city, country) => {
    setDatas([...datas, { city, country, id: Math.random() }])
  }

  return (
    <DataContext.Provider value={{ datas, addTravel, removeTravel }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

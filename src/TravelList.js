import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'
import Travel from './Travel'

const TravelList = () => {
  const { datas } = useContext(DataContext)
  return datas.length ? (
    <div className='App'>
      {datas.map((data) => <Travel data={data} key={data.id}/>)}
    </div>
  ) : (
    <h3 className='empty'>You have no travels... Enjoy!!!  :)</h3>
  )
}

export default TravelList

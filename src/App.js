import React from 'react'
import AddTravel from './AddTravel'
import DataContextProvider from './context/DataContext'
import Navbar from './Navbar'
import TravelList from './TravelList'

const App = () => {
  return (
    <DataContextProvider>
      <div className='App'>
        <Navbar />
        <TravelList />
        <AddTravel/>
      </div>
    </DataContextProvider>
  )
}

export default App

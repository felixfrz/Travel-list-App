import React, {useContext} from 'react'
import {DataContext} from './context/DataContext'
const Navbar = () => {

 const {datas} = useContext(DataContext);
 return (
   <div className='nav'>
     <h2>Travel-List</h2>
     <h4>Currrently you have {datas.length} travels left</h4>
   </div>
 )
}

export default Navbar

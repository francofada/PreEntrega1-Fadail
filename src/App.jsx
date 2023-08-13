import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import ItemLisContainer from './components/ItemLisContainer/ItemLisContainer'
function App() {

  return (
    <>
      <NavBar/>
      <ItemLisContainer greeting="Bienvenidos a WorldTravel"/>
    </>
  )
}

export default App

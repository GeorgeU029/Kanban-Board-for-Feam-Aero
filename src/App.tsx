import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import itLogo from './images/itLogo.png'
import './App.css'
import DepartmentContainer from './components/DepartmentContainer'
import MainContainer1 from './components/MainContainer1'
import Navbar from './components/Navbar'

import Contact from './components/Contact'
function App() {
  

  return (
    <>
      <Contact email="feam@feamaero.com" phone="123-456-7891" extension="4444" />
      </>
  )
}

export default App
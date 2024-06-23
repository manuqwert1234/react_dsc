import React from 'react'
import Navbar from './comp/Navbar'
import Middle from './comp/Middle'
import Ending from './comp/Ending'
import Hero from './comp/Hero'
import './App.css'
import Teampart from './comp/Teampart'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Middle/>
      <Ending/>
      <Teampart/>
    
    </div>
  )
}

export default App

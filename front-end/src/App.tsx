import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import LaunchPage from './components/LaunchPage'
import Map from './components/Map'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        <LaunchPage />
      </div>
    </>
  )
}

export default App

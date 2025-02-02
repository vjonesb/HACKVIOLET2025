import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

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

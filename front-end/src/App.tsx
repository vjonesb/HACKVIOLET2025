import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import LaunchPage from './components/LaunchPage'
import Map from './components/Map'
import {Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <main>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>    
          </main>
        <div>
          <LaunchPage />
        </div>
      </BrowserRouter>
  )
}

export default App

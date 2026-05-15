import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Mainpage from './components/Mainpage'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Mainpage />
    </div>
  )
}

export default App

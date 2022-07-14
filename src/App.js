import React from 'react'
import Header from "./Component/Header"
import './App.css'
import Home from './Component/Home'

const App = () => {
  return (
    <>
        <Header/>
          <div className="app_container">
              <Home/>
          </div>
    </>
  )
}

export default App

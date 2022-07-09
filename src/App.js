import React from 'react';
import './App.css'
import { Header, Home, Cart } from './components'
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>



      </div>
    </div>

  )
}

export default App;

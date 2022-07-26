import React from 'react';
import './App.css'
import { Header, Home, Cart, } from './components'
import { Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import {fetchPizzas, setPizzas}  from './redux/action/pizzas';
import { useDispatch } from 'react-redux'




function App(){

  const dispatch = useDispatch()

  // window.test = function(){axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setPizzas(data.pizzas)) })}
  
  React.useEffect(()=>{
    
    console.log(fetchPizzas())},
    []
  )                                     //useEffec вызывается при первом рендере

      return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home  />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    )
}

export default  App


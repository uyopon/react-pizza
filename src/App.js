import React from 'react';
import './App.css'
import { Header, Home, Cart, } from './components'
import { Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import {setPizzas}  from './redux/action/pizzas';
import { useSelector, useDispatch } from 'react-redux'

function App(){

  const dispatch = useDispatch()

  const {items} =useSelector(({pizzas, filters}) => {
    return{
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  })

 
  
  React.useEffect(
    ()=>{axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setPizzas(data.pizzas)) })}
    ,[]
  )                                     //useEffec вызывается при первом рендере

      return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home items={items} />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    )
}

export default  App


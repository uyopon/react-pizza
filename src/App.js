import React from 'react';
import './App.css'
import { Header, Home, Cart } from './components'
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  const[pizzas,setPizzas] = React.useState([])
  React.useEffect(()=>{
    fetch('http://localhost:3000/db.json').then(   (resp)=>resp.json()   ).then(   json=>{setPizzas(json.pizzas) } )

    

  },[])
  
  
  return (
    <div className="wrapper">
      <Header />

      <div className="content">

        <Routes>
          <Route exact path='/' element={<Home pizzas = {pizzas} />} />
          <Route path='cart' element={<Cart />} />
        </Routes>



      </div>
    </div>

  )
}

export default App;


//=)

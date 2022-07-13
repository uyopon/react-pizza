import React from 'react';
import './App.css'
import { Header, Home, Cart , setPizzas} from './components'
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';







function App() {
  

  React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({data})=>{store.dispatch(setPizzas(data.pizzas))})

    // axios.get('http://localhost:3000/db.json').then(({data})=>{setPizzas(data.pizzas)})
    

    // fetch('http://localhost:3000/db.json').then(   (resp)=>resp.json()   ).then(   json=>{setPizzas(json.pizzas) } )

    

  },[])
  
  
  return (
    <div className="wrapper">
      <Header />

      <div className="content">

        <Routes>
          <Route exact path='/' element={<Home items = {[1,2,3]} />} />
          <Route path='cart' element={<Cart />} />
        </Routes>



      </div>
    </div>

  )
}

export default App;




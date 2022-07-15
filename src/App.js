import React from 'react';
import './App.css'
import { Header, Home, Cart, } from './components'
import { Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas } from './components';

class App extends React.Component {

  
  componentDidMount() {
    console.log('hello')
    // axios.get('http://localhost:3000/db.json').then(({ data }) => { store.dispatch(setPizzas(data.pizzas)) })

    axios.get('http://localhost:3000/db.json').then(({ data }) => { this.props.setPizzas(data.pizzas) })
  }
  render() {
    
    return (
      
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home items={this.props.items} />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    )
  }
}
/////////////////////////////////////////App теперь следит за изменениями хранилищя

const mapStateToProps = (state) => {///f передает пропсы  в классовый компонент=)
  return {
    items: state.pizzasReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {      // f вызывается каждый раз когда state меняется
  return {
    setPizzas: (items)=> dispatch(setPizzas(items))

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App) //connect  нужен чтобыпередавать пропсы в классовую компоненту









// function App() {


//   React.useEffect(()=>{
//     axios.get('http://localhost:3000/db.json').then(({data})=>{store.dispatch(setPizzas(data.pizzas))})

//     // axios.get('http://localhost:3000/db.json').then(({data})=>{setPizzas(data.pizzas)})


//     // fetch('http://localhost:3000/db.json').then(   (resp)=>resp.json()   ).then(   json=>{setPizzas(json.pizzas) } )



//   },[])


//   return (
//     <div className="wrapper">
//       <Header />

//       <div className="content">

//         <Routes>
//           <Route exact path='/' element={<Home items = {[1,2,3]} />} />
//           <Route path='cart' element={<Cart />} />
//         </Routes>



//       </div>
//     </div>

//   )
// }

// export default App;
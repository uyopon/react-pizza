import React from 'react';
import './App.css'
import { Header, Home, Cart, setPizzas } from './components'
import { Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';



class App extends React.Component {
  
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(   ({ data }) => { store.dispatch(setPizzas(data.pizzas)) }     )

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
let mapStateToProps = (state) => {///f передает пропсы  в классовый компонент=)
  return {
    items: state.pizzasReducer.items
  }
}

let mapDispatchtoProps = (dispatch) => { // f вызывается каждый раз когда state меняется
  return {
    


  }

}

export default connect(mapStateToProps, mapDispatchtoProps)(App) //connect  нужен чтобыпередавать пропсы в классовую компоненту



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
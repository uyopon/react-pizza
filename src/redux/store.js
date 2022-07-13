import { createStore, combineReducers } from 'redux'
import filtersReducer from '../redux/reducers/filters'
import pizzasReducer from '../redux/reducers/pizzas'



const rootReducer = combineReducers({ //объеденяет 2 редуцера в 1
  filtersReducer,
  pizzasReducer
})

console.log(rootReducer)

const store = createStore(rootReducer)

export default store

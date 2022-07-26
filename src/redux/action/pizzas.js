import axios from 'axios';



export const fetchPizzas = (items) => {
    ()=>{axios.get('http://localhost:3000/db.json').then(({ data }) => {setPizzas(data.pizzas) })}
}



export const setPizzas = (items) => {
    return (
        {type: 'SET_PIZZAS',payload: items}
    )
}









// export const addMessgeActionCreator = () => {
//     return (
//         { type: SEND_MESSAGE }
//     )
// }


// export function setPizzas(items){
//     return{
//     type: 'SET_PIZZAS',
//     payload: items
//     }
// }
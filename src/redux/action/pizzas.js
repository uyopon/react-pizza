import axios from 'axios';


//fetchPizzas теперь ассинхрононный:)
export const fetchPizzas = () =>(dispatch)=> { //fetch -  принести данные используют в контексте обращения к серверу
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data))
    })
}


export const setLoaded  = (payload) => {
    return (
        {type: 'SET_LOADED',payload}
    )
}



export const setPizzas = (items) => {
    return (
        {type: 'SET_PIZZAS',payload: items}
    )
}



//_






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
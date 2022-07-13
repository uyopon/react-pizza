
export const setPizzas = (items) => {
    return (
        {
            type: 'SET_PIZZAS',
            payload: items
        }
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
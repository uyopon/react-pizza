const initialState = {
    items:[],
    isLoaded: false
}
const pizzas = (state = initialState,action)=> {

    
    switch (action.type) {
        case 'SET_PIZZAS': 
        console.log('228')
            return { 
                ...state, 
                items:action.payload,
                isLoaded: true
             }
        
        default:
            return state
    }
}

export default pizzas


// export const setPizzas = (items) => {
//     return (
//         {
//             type: 'SET_PIZZAS',
//             payload: items
//         }
//     )
    
// }
const initialState = {
    category: 0, //все. мсные. вегетерианские....
    activeItem: 0
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_SORT_BY': {
        //     return {
        //         ...state,
        //         sortBy: action.payload
        //     }
        // }
        case 'SET_CATEGORY': {
            return {
                ...state,
                category: action.payload

            }
        }
        case 'SET_ACTIVE_ITEM': {{
            return {
                ...state,
                activeItem: action.payload

            }
            
        }}


        default:
            return state
    }
}

export default filters
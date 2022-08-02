// export const setSortBy = (type) => ({
//     type: 'SET_SORT_BY',
//     payload: type
// })

export const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index
})


export const seActiveItem = (index) => ({ /// индекс категори null 0  1 2 3 4 5
    type: 'SET_ACTIVE_ITEM',
    payload: index
})
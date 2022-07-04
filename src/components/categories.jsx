import React, { useState } from 'react'

function categories({ items }) {


    const state = React.useState(null)
    const activeItem = state[0]
    const setActiveItem = state[1]
    console.log(state)
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((i, index) => <li className={activeItem === index ? "active" : ''} key={`${i}_${index}`} onClick={() => { setActiveItem(index) }}>{i}</li>)}


            </ul>
        </div>
    )
}

export default categories
//rfce =)



// class categories extends React.Component {
//     state = {
//         activeItem: 0
//     }
//     onSelectItem = (index) => {
//         this.setState(//ставит в очередь изменения состояния компонента и сообщает React, что этот компонент и его дочерние элементы необходимо повторно отобразить с обновленным состоянием.
//             { activeItem: index }
//         )

//     }

//     render() {
//         const { items, onClickItem } = this.props
//         return (
//             <div className="categories">
//                 <ul>

//                     {items.map((i, index) => <li className={this.state.activeItem === index ? "active" : ''} key={`${i}_${index}`} onClick={() => { this.onSelectItem(index) }}>{i}</li>)}
//                 </ul>
//             </div>
//         )
//     }

// }










import React, { useState } from 'react'



const categories = React.memo(({ items, onClickItem, activeCategory }) => {
    

    // const [activeItem, setActiveItem] = React.useState(0)//в state каждый раз хранится новое значение по умолчанию null

    //setActiveItem = функция которая обновляет переменную activeItem
    //setActiveItem = 1) изменяет ActiveItem 2) говорит реакту отрисовать изменения

    //state нужен для того чтобы оповещать компоненту о том что нужно что-то изменить



    return (
        <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickItem(null)}>
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickItem(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    )
}
)
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










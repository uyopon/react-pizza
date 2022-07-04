import React from 'react'

// function categories({ items }) {

//     return (
//         <div className="categories"> 
//             <ul>
//                 <li className="active">Все</li>
//                     {items.map((i, index) => <li key = {`${i}_${index}`} onClick= {()=>alert('')}>{i}</li>)}

//             </ul>
//         </div>
//     )
// }

// export default categories
//rfce =)

class categories extends React.Component {
    state = {
        activeItem: 0
    }
    onSelectItem = (index) => {
        this.setState(////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            { activeItem: index }
        )

    }

    render() {
        const { items, onClickItem } = this.props
        return (
            <div className="categories">
                <ul>

                    {items.map((i, index) => <li className={this.state.activeItem === index ? "active" : ''} key={`${i}_${index}`} onClick={() => { this.onSelectItem(index) }}>{i}</li>)}
                </ul>
            </div>
        )
    }

}

export default categories
import React from 'react'

function categories({ items }) {

    return (
        <div className="categories"> 
            <ul>
                <li className="active">Все</li>
                {items.map(i => <li>{i}</li>)}

            </ul>
        </div>
    )
}

export default categories
//rfce =)
import React from 'react'
import { Categories, SortPopUp } from '../components'
import PizzaBlock from '../components/PizzaBlock'
import { useSelector,  } from 'react-redux'


function Home({  }) {
    const {items} =useSelector(({pizzas }) => { // из этого объ вытаскивает только items // useSelector = подписка на хранилищие

        return{
          items: pizzas.items,  //useSelector ретурнит этот объ
        }
      })
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['все', 'Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"]} />

                <SortPopUp items={[{name:'популярности',type:'popular'},{name:'цене',type: 'price'}, {name:'алфавиту',type: 'alphabet'}]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


                {items && items.map((pizza)=><PizzaBlock key = {pizza.id} {...pizza}/> )}
                



            </div>
        </div>
    )
}

export default Home
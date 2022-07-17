import React from 'react'
import { Categories, SortPopUp } from '../components'
import PizzaBlock from '../components/PizzaBlock'
import { useSelector,useDispatch  } from 'react-redux'
import { setCategory } from '../redux/action/filters'

function Home({  }) {

    const dispatch = useDispatch()
    
    const items = useSelector(({pizzas }) => pizzas.items )// из этого объ вытаскивает только items // useSelector = подписка на хранилищие

    // const {items} =useSelector(({pizzas }) => { // из этого объ вытаскивает только items // useSelector = подписка на хранилищие

    //     return{
    //       items: pizzas.items,  //useSelector ретурнит этот объ
    //     }
    //   })

    const onSelectCategory = (index)=>{
        dispatch(setCategory(index))
    }

    return (
        <div className="container">
            <div className="content__top">

                <Categories //каждый раз когда будут меняться пиццы Categories будет делать ререндер. 
                items={['все', 'Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"]}// тут по-сути ничего не меняется. реакт сверяет пропсы. смотрит изменилась у них ссылка или нет. если ссылка изменилась- нужно производить ререндер. под ссылками подразумеается изменения данных в переменных или своствах
                onClickItem={onSelectCategory} 
                />

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
import React from 'react'
import { Categories, SortPopUp } from '../components'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock'
import { useSelector,useDispatch  } from 'react-redux'
import { seActiveItem, setCategory } from '../redux/action/filters'
import {fetchPizzas}  from '../redux/action/pizzas';

const categoryNames = ['все', 'Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"]

const sortItems = [{name:'популярности',type:'popular'},{name:'цене',type: 'price'}, {name:'алфавиту',type: 'alphabet'}]

function Home({  }) {

    const dispatch = useDispatch()
    
    const items = useSelector(({pizzas }) => pizzas.items )// из этого объ вытаскивает только items // useSelector = подписка на хранилищие
    const isLoaded = useSelector(({pizzas }) => pizzas.isLoaded )
    const {category,activeItem} = useSelector(({filters }) => filters )


    React.useEffect(()=>{
        dispatch(fetchPizzas())
        
    
      },[category,activeItem]
      )
      
      
        function setctiveItem2(index){
            dispatch(seActiveItem(index))

        }
        
    
      
    

    const onSelectCategory = React.useCallback((index)=>{ //всесто создания каждый раз анонимной функции она мемоизируется. то есть ссылка на эту функцию больше не меняется
        dispatch(setCategory(index))
    },[])

    

    return (
        <div className="container">
            <div className="content__top">

                <Categories //каждый раз когда будут меняться пиццы Categories будет делать ререндер. 
                items={categoryNames}// тут по-сути ничего не меняется. реакт сверяет пропсы. смотрит изменилась у них ссылка или нет. если ссылка изменилась- нужно производить ререндер. под ссылками подразумеается изменения данных в переменных или своствах
                onClickItem={onSelectCategory} 
                activeCategory = {category}
                />

                <SortPopUp items={sortItems}  activeItem = {activeItem} seActiveItem={setctiveItem2}/>

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoaded && items.map((pizza)=><PizzaBlock key = {pizza.id} isLoading = {true} {...pizza}/> )}
                {!isLoaded &&Array(10).fill(0).map((i,index)=><PizzaLoadingBlock key= {index}/>)}
                
            </div>
        </div>
    )
}


export default Home





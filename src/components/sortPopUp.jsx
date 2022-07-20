import React from 'react'

const  sortPopUp= React.memo(({items})=> {

    const [visiblePopUp, setvisiblePopUp] = React.useState(false)

    const toggleVisiblePopup = () =>{setvisiblePopUp(!visiblePopUp)} 

    const sortRef = React.useRef()// хранит ссылу на  DOM elem <div ref= {sortRef} className="sort">
    //React.useRef нужен для того чтобы всегда хранить октуальное значнеие

    // console.log(sortRef.current) 

    

    const handleOutsideClick228 = (e)=>{
        if(!e.path.includes(sortRef.current)){setvisiblePopUp(false)}

        
    } // e = хранит событие path = все блоки через которые произошел клилк

    React.useEffect(()=>{
        
        document.body.addEventListener('click',  handleOutsideClick228) // при кликле вызывается ф  которую мы указали)
        
       
    },[])
    //useEffect реагирует на первый рендер страницы(все остальные перерендеры старницы игнорирует по умолчанию если [])
    //[] список зависимостей.
    //[visiblePopUp]= реагирует  каждый раз когда visiblePopUp изменен

    const [activeItem,setActiveItem] = React.useState(0)

    const onSelectItem = (index)=> {
        setActiveItem(index)
        setvisiblePopUp(false)

    }
    const activeLabel = items[activeItem].name


    return (
        <div ref= {sortRef} className="sort">
            <div className="sort__label">
                <svg className={visiblePopUp? 'sort_rotated': ''}
                 width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"/>
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
                
            </div>
            
            {visiblePopUp &&<div className="sort__popup">
                <ul>
                    {items &&
                    items.map((obj,index)=>
                     <li className={activeItem === index ? 'active':null}
                     key={obj.type}
                     onClick={() => { onSelectItem(index) }}
                     >{obj.name}</li>)
                     }

                </ul>
            </div>
            }
        </div>
    )
}
)
export default sortPopUp





//pop up = выскакивать
// лучше передавать ссылку на не анонимную функцию для оптимизации

//проверяет был ли компонент обновлен,первый раз смонтирован, должен ли компонент удалиться
//useEffect реагирует на первый рендер страницы(все остальные перерендеры старницы игнорирует по умолчанию если [])
//[] список зависимостей.
//[visiblePopUp]= реагирует  каждый раз когда visiblePopUp изменен
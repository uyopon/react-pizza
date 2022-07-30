import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import PizzaLoadingBlock from './PizzaLoadingBlock'



function PizzaBlock({ imageUrl, name, price, sizes, types,  }) {
    

    
   
    

    const sizesNames = [26, 30, 40]
    const typesNames = [0, 1]

    const [activeSize, setActiveSize] = React.useState(sizes[0]) //create useState before return after function
    function setsize(size) {
        setActiveSize(size)
    }

    const [activeType, setActiveType] = React.useState(types[0]) //create useState before return after function
    function settype(index) {
        setActiveType(index)
    }

    return (
        
        <React.Fragment>


        {/* <ContentLoader 
        speed={2}
        width={288}
        height={457}
        viewBox="0 0 288 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
      >
        <circle cx="130" cy="130" r="130" /> 
        <rect x="0" y="281" rx="10" ry="10" width="265" height="23" /> 
        <rect x="0" y="319" rx="10" ry="10" width="268" height="60" /> 
        <rect x="0" y="393" rx="19" ry="19" width="93" height="35" /> 
        <rect x="124" y="392" rx="30" ry="30" width="143" height="49" /> 
        <rect x="203" y="409" rx="0" ry="0" width="14" height="8" />
      </ContentLoader> */}


        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typesNames && typesNames.map((type, index) =>
                            <li
                                key={index}
                                className={classNames({'active':activeType===index,'disabled': !types.includes(index)})} //=)
                                onClick={() => settype(index)}
                            >{type === 0 ? 'тонкое' : 'традиционное'}</li>)
                    }

                </ul>
                <ul>
                    {
                        sizesNames && sizesNames.map((size, index) =>
                            <li
                                key={index}
                                className={classNames({'active':activeSize===size,'disabled': !sizes.includes(size)})} //=)
                                onClick={() => setsize(size)}
                            >{size} см.</li>)
                    }

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>


        </div>
        </React.Fragment>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    
    

}
PizzaBlock.defaultProps= {
    
    
}



export default PizzaBlock
import React, { Children } from 'react';

const Button = (props) =>{
    console.log(props)

    


    return (
        <button className= {`button ${props.className}`}> {props.children}</button>
    )


}

export default Button
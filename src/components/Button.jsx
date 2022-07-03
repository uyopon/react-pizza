import React, { Children } from 'react';

const Button = ({className, children})=>{
   


    return (
        <button className= {`button ${className}`} onClick= {()=>alert('hello')}> {children}</button>
    )


}

export default Button
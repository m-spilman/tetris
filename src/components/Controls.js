import React from 'react'

export default function Controls(props) {
    const handleClick = () =>{

    }
    return (
        <div className ='controls'>
            <button className="control-button" onClick={handleClick}>Left</button>
            <button className="control-button" onClick={handleClick}>Right</button>
            <button className="control-button" onClick={handleClick}>Rotate</button>
            <button className="control-button" onClick={handleClick}>Down</button>
            
        </div>
    )
}

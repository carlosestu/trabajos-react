import React, { useState } from 'react'

function Container({title}) {
    const [trueOrFalse, setTrueOrFalse] = useState(false);
    const cambiarEntreTrueFalse = () => {
        setTrueOrFalse(!trueOrFalse);
    }
  return (
    <div className='divPrincipal'>
    <h1 onClick={cambiarEntreTrueFalse}><link rel="stylesheet"
     href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
     />{title}</h1>
     {trueOrFalse && (
        <ul>
          <li>hijo 1</li>
          <li>hijo 2</li>
          <li>hijo 3</li>
          <li>hijo 4</li>
        </ul>
    )}
    </div>
  )
}

export default Container
import React from 'react'
import Colors from './Colors'
function Color({color}) {

  return (
    <li style={{backgroundColor: color.name, color: 'white'}}>{color.name}, id: {color.id}</li>  
  )
}

export default Color
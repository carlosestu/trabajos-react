import React from 'react'
import Colors from './Colors'
function Color({color}) {

  return (
    <li style={{backgroundColor: color.name}}>{color.name}</li>  
  )
}

export default Color
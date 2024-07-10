import React from 'react'
import Color from './Color'
function Colors({colors}) {
  return (
    <ul>
    {colors.map((element) => (
        <Color key={element.id} color={element} />
      ))}
    </ul>
  )
}

export default Colors
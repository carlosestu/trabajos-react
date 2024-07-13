import React from 'react'
import { Link } from 'react-router-dom'

function IndexMessage() {
  return (
    <div><h2>Add a user and select it</h2>
    <Link to="/List">ir a la lista</Link>
    </div>
  )
}

export default IndexMessage
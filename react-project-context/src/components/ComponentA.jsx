import React, { useContext } from 'react'
import { UserContext } from '../App'


const ComponentA = () => {
    const user = useContext(UserContext)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default ComponentA

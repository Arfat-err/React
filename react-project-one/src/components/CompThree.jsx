import React from 'react'

const CompThree = ({count,setCount}) => {
  return (
    <div>
      <button onClick={()=>{setCount(count = 0)}}>reset count</button>
    </div>
  )
}

export default CompThree

import React from 'react'

const CompTwo = ({count,setCount}) => {
  return (
    <div>
      <button onClick={()=>{setCount(count-1)}}>decrement</button>
    </div>
  )
}

export default CompTwo

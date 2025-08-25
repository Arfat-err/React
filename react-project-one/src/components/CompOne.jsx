import React from 'react'

const CompOne = ({count,setCount}) => {
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
    </div>
  )
}

export default CompOne

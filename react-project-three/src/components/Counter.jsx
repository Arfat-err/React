import React, { useState } from 'react'
import './counter.css'

const Counter = (props) => {

  return (
    <div>
        {props.children}
 <button onClick={props.clickHandler}>click me</button>
    </div>
  )
}

export default Counter

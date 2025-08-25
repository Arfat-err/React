import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  function clickHandler(){
    setCount(count + 1)
  }
  return (
    <Counter clickHandler={clickHandler}>
      <p> You have clicked {count} times</p>
    </Counter>
  )
}

export default App

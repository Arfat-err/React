import { useState } from 'react'
import './App.css'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'
import CompThree from './components/CompThree'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <CompOne count={count} setCount={setCount}></CompOne>
  <CompTwo count={count} setCount={setCount}></CompTwo>
  <CompThree count={count} setCount={setCount}></CompThree>
</div>
  )
}

export default App

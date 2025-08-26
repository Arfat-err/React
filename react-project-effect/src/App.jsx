import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);


  // variation : 1
  // // runs on every render
  // useEffect(() => {
  //   alert('effect on every render')
  // })

  // variation : 2
  // // that is run on only first render
  // useEffect(() => {
  //   alert('effect on first render')
  // }, [])

  // vriation : 3
  // // runs on first render and on every update of count state and runs on multiple renders
  // useEffect(() => {
  //   alert('effect on first render and on every update of count state')
  // }, [count])



  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={()=>setCount(count + 1)}>click me</button>
    </div>
  )
}

export default App

import { createContext,useState } from 'react'
import ComponentA from './components/ComponentA'


const UserContext = createContext();


function App() {
  const [user, setUser] = useState({name:"Arfat"})

  return (
    <>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
    </>
  )
}

export default App
export { UserContext }
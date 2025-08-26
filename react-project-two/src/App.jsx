import { useState } from 'react'
import './App.css'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(true);
  
if(isLoggedIn){
 return (
<LogoutButton/>
 )
}
else {
  return(
        <LoginButton/>
  )

}

}


export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from './useLocalStorage'
import Header from './header'

function App() {
  
  const [username, setUsername] = useLocalStorage("username","")

  return (
    <>
    <Header/>
    <div className="App">
      <fieldset>
        <label for="username">Username</label>
        <input name="username" id="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
      </fieldset>
        
    </div>
    </>
  )
}

export default App

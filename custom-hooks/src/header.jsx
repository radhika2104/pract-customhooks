import React from 'react'
import useLocalStorage from './useLocalStorage'

function Header() {
    const [username] = useLocalStorage("username","")
  return (
    <div>{username}</div>
  )
}

export default Header
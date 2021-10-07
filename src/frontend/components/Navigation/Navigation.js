import React, { useState, useContext } from 'react'

import './Navigation.sass'

import { NavigationContext } from '../../contexts/Navigation'

const Navigation = () => {
  const [ isOpen, setOpen ] = useState(false)
  const { activeWorkspace, setActiveWorkspace, getWorkspaceIndex } = useContext(NavigationContext)

  return (
    <div id='navigationLayer'>
      <div/>
      <div id='Navigation' className={`navigation${isOpen ? 'Open' : 'Closed'}`}>
        <button id='toggleNav' onClick={() => setOpen(!isOpen)}>X</button>
        <button onClick={() => setActiveWorkspace(getWorkspaceIndex('loomFactory'))}>A</button>
        <button onClick={() => setActiveWorkspace(getWorkspaceIndex('loomView'))}>B</button>
      </div>
    </div>
  )
}

export default Navigation
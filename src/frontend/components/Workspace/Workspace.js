import React, { useContext } from 'react'

import './Workspace.sass'

import { NavigationContext } from '../../contexts/Navigation'
import LoomFactory from '../../workspaces/LoomFactory/LoomFactory'
import LoomView from '../../workspaces/LoomView/LoomView'

const Workspace = () => {
  const { activeWorkspace, setActiveWorkspace, getWorkspaceIndex } = useContext(NavigationContext)

  return (
    <div id='Workspace'>
      {activeWorkspace === getWorkspaceIndex('loomFactory') && <LoomFactory/>}
      {activeWorkspace === getWorkspaceIndex('loomView') && <LoomView/>}
    </div>
  )
}

export default Workspace
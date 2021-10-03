import React, { useState, useEffect } from 'react'

import LoomsManagerInterface from '../../contractInterfaces/LoomsManagerInterface'

const LoomFactory = () => {
  const [ numLooms, setNumLooms ] = useState(0)
  const loomsManager = new LoomsManagerInterface()

  useEffect(() => refreshLoomCount(), [])

  const createLoom = () => {
    loomsManager.createLoom()
      .then(result => refreshLoomCount())
      .catch(error => console.log(error))
  }

  const refreshLoomCount = () => {
    loomsManager.getLoomCount()
      .then(result => setNumLooms(result))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Loom Factory</h1>
      <p>{`${numLooms} active looms`}</p>
      <button onClick={createLoom}>Create</button>
    </div>
  )
}

export default LoomFactory
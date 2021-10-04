import React, { useState, useEffect } from 'react'

import LoomsManagerInterface from '../../contractInterfaces/LoomsManagerInterface'

const LoomFactory = () => {
  const [ numLooms, setNumLooms ] = useState(0)
  const loomsManager = new LoomsManagerInterface()

  useEffect(() => refreshLoomCount(), [])

  useEffect(() => {
    loomsManager.getLoomDetails(1)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }, [])

  const createLoom = e => {
    e.preventDefault()
    loomsManager.createLoom(e.target.loomName.value)
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

      <form onSubmit={createLoom}>
        <input id='loomName' required/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default LoomFactory
import React, { useState, useEffect } from 'react'

import LoomInterface from '../../../contractInterfaces/LoomInterface'

const LoomArea = () => {
  const loom = new LoomInterface()
  const [ water, setWater ] = useState('')
  const [ earth, setEarth ] = useState([])
  const [ air, setAir ] = useState([])
  const [ fire, setFire ] = useState([])

  useEffect(() => {
    loom.getWater()
      .then(newWater => setWater(newWater))
      .catch(error => console.log(error))

    loom.getEarth()
      .then(newEarth => setEarth(newEarth))
      .catch(error => console.log(error))

    loom.getAir()
      .then(newAir => setAir(newAir))
      .catch(error => console.log(error))

    loom.getFire()
      .then(newFire => setFire(newFire))
      .catch(error => console.log(error))
  }, [])

  const joinLoom = () => {
    loom.join()
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <p>{`Water: ${water}`}</p>
      {earth.map(e => <p>{`Earth: ${e}`}</p>)}
      {air.map(a => <p>{`Air: ${a}`}</p>)}
      {fire.map(f => <p>{`Fire: ${f}`}</p>)}

      <button onClick={joinLoom}>Join</button>
    </div>
  )
}

export default LoomArea
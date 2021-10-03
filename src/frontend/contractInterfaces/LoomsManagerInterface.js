import LoomsManager from '../artifacts/src/blockchain/contracts/LoomsManager.sol/LoomsManager.json'

import BaseInterface from './BaseInterface'

export default class LoomsManagerInterface extends BaseInterface {
  constructor() {
    super('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', LoomsManager.abi)
  }

  async createLoom() {
    if(super.ethCheck) {
      const contract = await super.getContract(true)

      try {
        await contract.createLoom()
        return true
      } catch(error) {
        return new Error(error)
      }
    }
  }

  async getLoomCount() {
    if(super.ethCheck) {
      const contract = await super.getContract()

      try {
        const loomCount = await contract.getLoomCount()
        return loomCount
      } catch(error) {
        return new Error(error)
      }
    }
  }
}
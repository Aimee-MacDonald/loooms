import LoomsManager from '../artifacts/src/blockchain/contracts/LoomsManager.sol/LoomsManager.json'

import BaseInterface from './BaseInterface'

export default class LoomsManagerInterface extends BaseInterface {
  constructor() {
    super('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', LoomsManager.abi)
  }

  async createLoom(loomName) {
    if(super.ethCheck) {
      const contract = await super.getContract(true)

      try {
        await contract.createLoom(loomName)
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

  async getLoomDetails(loomId) {
    if(super.ethCheck) {
      const contract = await super.getContract()

      try {
        const loomDetails = await contract.getLoomDetails(loomId)
        return loomDetails
      } catch(error) {
        return new Error(error)
      }
    }
  }
}
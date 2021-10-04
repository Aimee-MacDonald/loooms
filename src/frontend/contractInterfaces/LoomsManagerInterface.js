import LoomsManager from '../artifacts/src/blockchain/contracts/LoomsManager.sol/LoomsManager.json'

import BaseInterface from './BaseInterface'

export default class LoomsManagerInterface extends BaseInterface {
  constructor() {
    super('0x5FC8d32690cc91D4c39d9d3abcBD16989F875707', LoomsManager.abi)
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
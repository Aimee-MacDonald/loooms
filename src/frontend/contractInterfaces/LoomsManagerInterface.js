import { ethers } from 'ethers'
import LoomsManager from '../artifacts/src/blockchain/contracts/LoomsManager.sol/LoomsManager.json'
import 'regenerator-runtime/runtime'

const loomsManagerAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

export default class LoomsManagerInterface {
  constructor() {}

  ethCheck() { return typeof window.ethereum !== 'undefined' }

  async getContract(signed) {
    if(signed) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(loomsManagerAddress, LoomsManager.abi, signer)
      return contract
    } else {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(loomsManagerAddress, LoomsManager.abi, provider)
      return contract
    }
  }

  async createLoom() {
    if(this.ethCheck) {
      const contract = await this.getContract(true)

      try {
        await contract.createLoom()
        return true
      } catch(error) {
        return new Error(error)
      }
    }
  }

  async getLoomCount() {
    if(this.ethCheck) {
      const contract = await this.getContract()

      try {
        const loomCount = await contract.getLoomCount()
        return loomCount
      } catch(error) {
        return new Error(error)
      }
    }
  }
}
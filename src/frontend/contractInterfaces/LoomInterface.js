import { ethers } from 'ethers'
import Loom from '../artifacts/src/blockchain/contracts/Loom.sol/Loom.json'
import 'regenerator-runtime/runtime'

const loomAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export default class LoomInterface {
  constructor() {}

  ethCheck() { return typeof window.ethereum !== 'undefined' }

  async getContract(signed) {
    if(signed) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(loomAddress, Loom.abi, signer)
      return contract
    } else {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(loomAddress, Loom.abi, provider)
      return contract
    }
  }

  async getWater() {
    if(this.ethCheck) {
      const contract = await this.getContract()

      try {
        const water = await contract.getWater()
        return water
      } catch(error) {
        return error
      }
    }
  }

  async getEarth() {
    if(this.ethCheck) {
      const contract = await this.getContract()

      try {
        const earth = await contract.getEarth()
        return earth
      } catch(error) {
        return error
      }
    }
  }

  async getAir() {
    if(this.ethCheck) {
      const contract = await this.getContract()

      try {
        const air = await contract.getAir()
        return air
      } catch(error) {
        return error
      }
    }
  }

  async getFire() {
    if(this.ethCheck) {
      const contract = await this.getContract()

      try {
        const fire = await contract.getFire()
        return fire
      } catch(error) {
        return error
      }
    }
  }

  async join() {
    if(this.ethCheck) {
      const contract = await this.getContract(true)

      try {
        await contract.join()
        return true
      } catch(error) {
        return error
      }
    }
  }
}
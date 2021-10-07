const hre = require("hardhat")

async function deployLoom() {
  const Loom = await hre.ethers.getContractFactory('Loom')
  const loom = await Loom.deploy()

  await loom.deployed()

  console.log(`Loom deployed to: ${loom.address}`)
}

async function deployLoomsManager() {
  const LoomsManager = await hre.ethers.getContractFactory('LoomsManager')
  const loomsManager = await LoomsManager.deploy()

  await loomsManager.deployed()

  console.log(`LoomsManager deployed to: ${loomsManager.address}`)
}

async function main() {
  await deployLoom()
  await deployLoomsManager()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
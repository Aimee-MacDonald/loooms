const hre = require("hardhat")

async function main() {
  const Loom = await hre.ethers.getContractFactory('Loom')
  const loom = await Loom.deploy()

  await loom.deployed()

  console.log(`Loom deployed to: ${loom.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

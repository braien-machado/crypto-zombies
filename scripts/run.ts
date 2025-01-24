import hre from 'hardhat'

const main = async () => {
  const [owner] = await hre.ethers.getSigners()
  const zombieFactory = (await hre.ethers.deployContract('ZombieFactory'))

  await zombieFactory.waitForDeployment()

  console.log('ZombieFactory deployed to', zombieFactory.target)
  console.log('Deployed by', owner.address)

  await zombieFactory.createRandomZombie('Zombie Test')
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()

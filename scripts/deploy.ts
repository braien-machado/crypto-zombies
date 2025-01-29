import hre from 'hardhat'

const main = async () => {
  const [owner] = await hre.ethers.getSigners()

  const mockCryptoKitties = await hre.ethers.deployContract('MockCryptoKitties')
  await mockCryptoKitties.waitForDeployment()

  console.log('MockCryptoKitties deployed to', mockCryptoKitties.target)

  const cryptoZombies = await hre.ethers.deployContract('ZombieFeeding')
  await cryptoZombies.waitForDeployment()

  console.log('CryptoZombies deployed to', cryptoZombies.target)
  console.log('Deployed by', owner.address)

  const createZombieProcess = await cryptoZombies.createRandomZombie('Zombie Test')
  await createZombieProcess.wait();
  
  const setKittyContractProcess = await cryptoZombies.setKittyContractAddress(mockCryptoKitties.target)
  await setKittyContractProcess.wait()

  const feedZombieProcess = await cryptoZombies.feedOnKitty(1, 15)
  await feedZombieProcess.wait()

  console.log('Zombie has been fed with a Kitty')
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

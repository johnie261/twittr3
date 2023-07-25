// const hre = require("hardhat");

// async function main() {
//   const profileImageFactory = await hre.ethers.getContractFactory("ProfileImageNfts")

//   const profileImageContract = await profileImageFactory.deploy()

//   await profileImageContract.deployed()

//   console.log('Profile Image Minter deployed to:', profileImageContract.address)
// }

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("ProfileImageNfts");

  console.log("Token address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0x589d495395300a1fCd4835A805C6cD4E8BA3Fdd5
async function main() {
  // Grab the contract factory 
  const ChadNFT = await ethers.getContractFactory("ChadNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const chadNFT = await ChadNFT.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", chadNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
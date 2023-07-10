require('dotenv').config();
const ethers = require('ethers');
const rpc = "https://eth-sepolia.public.blastapi.io";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const contract = require("../artifacts/contracts/ChadNFT.sol/ChadNFT.json");
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);
const abi = contract.abi;
const contractAddress = process.env.ADDR;
const nftContract = new ethers.Contract(contractAddress, abi, signer);
const tokenUri = "https://gateway.pinata.cloud/ipfs/Qmb3dmjyLiJnwurbuhfxpgocU5fMGtvootTMX4Xdsr95ge"

const mintNFT = async () => {
    let nftTxn = await nftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT minted: https://sepolia.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
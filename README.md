# NFT

- Creating a simple NFT contract and deploying to Sepolia testnet.
- Mint an NFT

1. `npm install`
2. Create `.env` file and define `PRIVATE_KEY` string. 
    - Sepolia testnet ETH required to deploy contract -> [Faucet](https://sepoliafaucet.com/)
    - ** Be careful whenever using your private key (generate a new wallet!)
3. `npx hardhat run scripts/deploy.js --network sepolia`
4. Take created contract address and save in `ADDR` in .env
5. Call `mintNFT()` contract function using `node scripts/mint`

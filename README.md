# NFT

Creating a simple NFT contract and deploying to Sepolia testnet.

1. `npm install`
2. Create `.env` file and define `API_URL` and `PRIVATE_KEY` strings.
    - Sepolia testnet ETH required to deploy contract -> [Faucet](https://sepoliafaucet.com/)
    - ** Be careful whenever using your private key (generate a new wallet!)
3. `npx hardhat run scripts/deploy.js --network sepolia`

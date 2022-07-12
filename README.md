# React Crypto Transactions App

## Build using

- ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
- ![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![material-ui](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
- ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Summary

Application for transferring cryptocurrency between users on the Ethereum blockchain with support for connecting crypto wallet by MetaMask, WalletConnect, or Coinbase Wallet. A random GIF is attached for each transaction based on the provided keyword. You can check live [DEMO](https://react-crypto-transactions.netlify.app) deployed to ![netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## Smart Contract

Smart Contract is deployed on the Ethereum Rinkeby Testnet

- Address: `0x0E55E06854f4B4905d8D17eA12df169b753552B2`
- Source code: [GitHub](https://github.com/sfistaq/crypto-transactions-blockchain)

## To initialize this project and its dependencies

Run `npm install` in the root of the terminal to download dependencies.

After installing use `npm start` at the root of the project in the terminal to open app on http://localhost:3000

## Environment Variables

Create a `.env` file in the root of the project directory as per the `.example.env`

- REACT_APP_GIPHY_API_KEY: Giphy API key [how to get](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key)
- REACT_APP_INFURA_KEY: Infura API key [how to get](https://ethereumico.io/knowledge-base/infura-api-key-guide/)

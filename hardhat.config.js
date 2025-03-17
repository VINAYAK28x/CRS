require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      timeout: 60000,
      gas: "auto",
      gasPrice: 20000000000, // 20 gwei
      maxPriorityFeePerGas: "auto",
      maxFeePerGas: "auto",
      verify: {
        etherscan: {
          apiKey: process.env.ETHERSCAN_API_KEY
        }
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 60000
  }
};

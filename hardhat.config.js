/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // Networks
  networks: {
    dev: {
      url: 'http://127.0.0.1:9933',
      gasPrice: 1000000000,
      chainId: 1281,
    },
    moonbase: {
      url: 'https://rpc.testnet.moonbeam.network',
      gasPrice: 1000000000,
      chainId: 1287,
    },
    moonriver: {
      url: 'https://rpc.moonriver.moonbeam.network',
      gasPrice: 1000000000,
      chainId: 1285,
    },
  },

  // Solc
  solidity: {
    compilers: [
      {
        version: '0.5.3',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },

  // Paths
  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};

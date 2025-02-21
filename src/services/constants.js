export const _NETWORKS = {
  arbitrum: { 
    name: "Arbitrum One", 
    id: 42161, 
    graph: "https://api.thegraph.com/subgraphs/name/abstrucked/weavr_goerli",
    explorer: "https://arbiscan.io",
    contracts: {
      TOKEN_ADDRESS:"0x90BE6F8f30931322e60b913ecE49d1724D996054",
      BEACON_ADDRESS:"0x09f78bbefec822c6d81efb7a1474dee5727cc610",
      WEAVR:"0x43240c0f5dedb375afd28206e02110e8fed8cFc0",
      THREAD_DEPLOYER:"0xB32469F1fba93806C60d8c736EB5830BfE7b5fD4",
      BOND:"0xCe5A042ED87Ed92AFE33e3D4fFf600e39d0Cef2F",
      FRABRIC_CODE:"0x117b32BeCE1d46A45fE55470B22fD7C019691a58",
      TRADE_TOKEN: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      AIRDROP: "0x560ea772dbb194fa471ce9a5573daddc3e632f26"
    }
  },
  arbitrum_goerli: { 
    name: "Arbitrum Goerli Testnet", 
    id: 421613, 
    graph: "https://api.thegraph.com/subgraphs/name/abstrucked/weavr-arbtest-0123",
    explorer: "https://goerli.arbiscan.io",
    contracts: {
      TOKEN_ADDRESS:"0x386575974C05E558D82FE6Cc965cD69503969125",
      BEACON:"0x12C1389c43Af590EF1170E222E163f88f269699A",
      WEAVR:"0x70732A738cB59Ffdc5647608DFaAfae35Cae85A1",
      THREAD_DEPLOYER:"0xb0a230d7A56dec2524e3afAeB0D0cA8e0Bc45924",
      DEX_ROUTER: "0x4c9087d3Fb8771a8CDb8702b4BBF928E153b8324",
      BOND:"0x4f995659824E51B3461397C922E48ca0C2752007",
      FRABRIC_CODE:"0xdDdbfb95e5514086E88B1Cc69aa7AA75c13a2853",
      TRADE_TOKEN: "0xaa72fbFa8120Bb295A126C34348bb3d018c70efD"
    }
  },
  goerli: {
    name: "Goerli",
    id: 5,
    graph: "https://api.thegraph.com/subgraphs/name/0xnshuman/frabric-goerli",
    contracts: {
      TOKEN_ADDRESS:"0x9018f685FdceE5d8A4Db8420C456c7CfBE42352E",
      BEACON:"0x54e59bB020b4607f752F51F8Ce3C734A6E8650fC",
      WEAVR:"0xC3F52C10ca3f76e53496aFED490a0D672Fd3D5e9",
      THREAD_DEPLOYER:"0x0545608D01fdEF4b0E9564E00e525DAa9438E4Bc",
      BOND:"0xa875Fa4a7BbCA6e63f7DFc9df9839a752283d439",
      FRABRIC_CODE:"0x3bdA099e802152d9FD0EAd7716fF4c78FC841Cf0",
      TRADE_TOKEN: "0xd35cceead182dcee0f148ebac9447da2c4d449c4"
    }
  },

  ethereum: { name: "Ethereum", id: 1 },
  rinkeby: { name: "Rinkeby", id: 4 },
  polygon: {name: "Polygon", id: 137},
  optimism: {name: "Optimism", id: 10},
  avalanche: {name: "Avalanche", id: 43114},
};

export const DAO = "weavr";
export const GUEST = "0x0000000000000000000000000000000000000000";

const chain = process.env.VUE_APP_SELECTED_CHAIN
export const NETWORK = _NETWORKS[chain];

export const CONTRACTS = NETWORK.contracts;
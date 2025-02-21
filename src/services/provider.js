import Wallet from "./wallet"
import Market from "./market"
import DAO from "./dao";
import Crowdfund from "./crowdfund";
import Token from "./token";
import Airdrop from "./airdrop";
import { Whitelist } from "../whitelist";
import IPFSStorageNetwork from "../data/network/storage/ipfs/IPFSStorageNetwork"
import EthereumClient from "../data/network/web3/ethereum/ethereumClient"
import TheGraphAPIClient from "../data/network/graph/implementation/theGraphAPIClient"
import TheGraphAPIMapper from "../data/network/graph/implementation/theGraphAPIClientMapper"
import DEX from "./dex/index,js";
const graphQLAPIClient = new TheGraphAPIClient(new TheGraphAPIMapper())
const ethereumClient = new EthereumClient()
const storageNetwork = new IPFSStorageNetwork()

class ServiceProvider {
  /**
   * Creates wallet service.
   * @returns {Wallet} Wallet service
   */
  static wallet() {
    return new Wallet(
      ethereumClient
    )
  }

  /**
   * Creates market service.
   * @returns {Market} Market service
   */
  static market() {
    return new Market(
      ethereumClient,
      graphQLAPIClient,
      storageNetwork
    )
  }

  /**
   * Creates DAO service
   */
  static dao() {
    return new DAO(
      ethereumClient,
      graphQLAPIClient,
      storageNetwork
    )
  }

  static dex() {
    return new DEX(ethereumClient, graphQLAPIClient);
  }

  static token() {
    return new Token(
      ethereumClient,
      graphQLAPIClient
    )
  }

  static crowdfund() {
    return new Crowdfund(ethereumClient);
  }

  static whitelist() {
    return new Whitelist(
      ethereumClient,
      graphQLAPIClient
    )
  }

  static airdrop() {
    return new Airdrop(
      ethereumClient,
      graphQLAPIClient,
      storageNetwork
    )
  }
}

export default ServiceProvider
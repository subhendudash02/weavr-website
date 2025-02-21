import {
  THREAD_PROPOSAL_QUERY,
  ALL_ASSETS_QUERY,
  PARTICIPANTS_PER_DAO,
  VOUCHES_PER_PARTICIPANT,
  ALL_PROPOSALS,
  ALL_NEEDLES_QUERY,
  ALL_THREADS_QUERY,
  THREAD_DEX_ORDERS_QUERY
} from "./queries"

/**
 * Abstract GraphQL API client
 * @property {GraphQLAPIMapper} mapper Model mapper
 */
class GraphQLAPIClient {
  constructor(
    mapper
  ) {
    this.mapper = mapper
  }

  /**
   * @callback mappingCallback
   * @param {GraphQLAPIMapper} mapper
   * @param {any} response
   * @returns {any} Mapped data
   */

  /**
   * Query ¯\_(ツ)_/¯ 
   * @param {any} query Query doc
   * @param {Array} vars Query variables
   * @param {mappingCallback} mappingCallback Model mapping callback
   */
  // eslint-disable-next-line
  async query(query, vars = {}, mappingCallback = {}) { }
}

export { 
  GraphQLAPIClient,
  ALL_ASSETS_QUERY,
  PARTICIPANTS_PER_DAO,
  VOUCHES_PER_PARTICIPANT,
  THREAD_PROPOSAL_QUERY,
  ALL_PROPOSALS,
  ALL_NEEDLES_QUERY,
  ALL_THREADS_QUERY,
  THREAD_DEX_ORDERS_QUERY
}

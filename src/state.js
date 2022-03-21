/**
 * @typedef {Object} Player
 * @property {string} name
 * @property {number} score
 */

/**
 * @typedef {Object} State
 * @property {Array<Player>} players
 */

/**
 *
 * @returns {State}
 */
export const stateFactory = () => ({
  players: [],
});

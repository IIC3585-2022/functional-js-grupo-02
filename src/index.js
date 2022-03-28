import { Y } from './combinators/y.js';
import { regeneratePlayerState } from './calculators.js';
import { initializeState } from './initializers.js';
import { getPlays, output } from './io.js';

/**
 * @typedef {import('./types.js').Player} Player
 * @typedef {import('./types.js').roundExecutor} roundExecutor
 */

/**
 * @param {roundExecutor} f
 * @returns {roundExecutor}
 */
const playRound = (f) => (players) => {
  const [currentPlayer, ...otherPlayers] = players;
  output(`${currentPlayer.name}'s turn`);
  const plays = getPlays();
  const currentPlayerMod = regeneratePlayerState(currentPlayer, plays);
  output(`${currentPlayerMod.name} has ${currentPlayerMod.score} left`);
  return currentPlayerMod.score ? f([...otherPlayers, currentPlayerMod]) : currentPlayerMod;
};

/**
 * @param  {Array<string>} names
 */
export const playGame = (...names) => {
  const players = initializeState(...names);
  /** @type {Player} */
  const winner = Y(playRound)(players);
  output(`${winner.name} won`);
};

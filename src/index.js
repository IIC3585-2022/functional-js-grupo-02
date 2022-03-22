import { stateFactory } from './state.js';

/**
 * @typedef {import('./state.js').State} State
 */

/**
 * @param {string} location
 * @returns {number}
 */
const getScoreFromLocation = (location) => {
  if (location === 'A2') {
    return 3;
  }
  return 1;
}

/**
 * @param {string} location
 * @param {number} points
 *
 * @returns {number}
 */
const throwDart = (location, points) => {
  return Math.abs(points - getScoreFromLocation(location))
}

/**
 * @param {State} state
 *
 * @returns {boolean}
 */
const gameFinished = (state) => {
  return false;
}

/**
 * @param {State} state
 *
 * @returns {State}
 */
const modifyState = (state) => {
  const newScore = throwDart();
  return { ...state, score: newScore };
}

/**
 * @param {State} state
 *
 * @returns {State}
 */
const playGame = (state) => {
  const stateCopy = modifyState(state);
  if (gameFinished(stateCopy)) {
    return stateCopy;
  }
  return playGame(stateCopy);
}

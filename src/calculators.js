import * as _ from 'lodash-es';
import { IOMonad } from './monads/io.js'; // eslint-disable-line no-unused-vars

/**
 * @typedef {import('./types.js').Player} Player
 * @typedef {import('./types.js').Play} Play
 */

/**
 * @param {Play} play
 * @returns {number}
 */
export const getScoreFromThrow = (play) => {
  if (play === 'DB') {
    return 50;
  }
  if (play === 'SB') {
    return 25;
  }
  return play.map((num) => Number(num)).reduce((acc, curr) => acc * curr, 1);
};

/**
 * @param {number} score
 * @param {IOMonad<Array<Play>>} plays
 * @returns {number}
 */
export const calculateScore = (score, plays) => {
  /**
   * @param {Array<Play>} pls
   * @returns {number}
   */
  const combine = (pls) => _.reduce(
    pls,
    (acc, play) => acc - getScoreFromThrow(play),
    score,
  );
  return Math.abs(plays.map(combine).eval());
};

/**
 *
 * @param {Player} player
 * @param {IOMonad<Array<Play>>} plays
 * @returns {Player}
 */
export const regeneratePlayerState = ({ name, score: currentScore }, plays) => (
  { name, score: calculateScore(currentScore, plays) }
);

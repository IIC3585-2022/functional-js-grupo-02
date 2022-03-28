import * as _ from 'lodash-es';
import { INITIAL_SCORE } from './constants.js';

/**
 * @typedef {import('./types.js').Player} Player
 */

/**
 * @param  {Array<string>} names
 * @returns {Array<Player>}
 */
export const initializeState = (...names) => (
  _.map(names, (name) => ({ name, score: INITIAL_SCORE }))
);

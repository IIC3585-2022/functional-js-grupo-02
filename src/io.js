import promptSync from 'prompt-sync';
import { IOMonad } from './monads/io.js';

/**
 * @typedef {import('./types.js').Play} Play
 */

const prompt = promptSync();

/**
 * @returns {IOMonad<Array<Play>>}
 */
export const getPlays = () => {
  const monad = new IOMonad(() => prompt('Please enter this player\'s 3 dart shots: '));
  return monad.map(JSON.parse);
};

/**
 * @param {string} message
 */
export const output = (message) => {
  /* eslint-disable-next-line no-console */
  const monad = new IOMonad(() => console.log(message));
  monad.eval();
};

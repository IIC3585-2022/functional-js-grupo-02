import promptSync from 'prompt-sync';

/**
 * @typedef {import('./types.js').Player} Player
 * @typedef {import('./types.js').Play} Play
 * @typedef {import('./types.js').roundExecutor} roundExecutor
 */

const prompt = promptSync();

/**
 * @param {Play} play
 * @returns {number}
 */
const getScoreFromThrow = (play) => {
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
 * @param {Array<Play>} plays
 * @returns {number}
 */
const calculateScore = (score, plays) => Math.abs(
  plays.reduce((acc, play) => acc - getScoreFromThrow(play), score),
);

/**
 *
 * @param {Player} player
 * @param {Array<Play>} plays
 * @returns {Player}
 */
const calculatePlayerScore = ({ name, score }, plays) => (
  { name, score: calculateScore(score, plays) }
);

/**
 * @param {roundExecutor} f
 * @returns {roundExecutor}
 */
const playRound = (f) => (players) => {
  const [currentPlayer, ...otherPlayers] = players;
  console.log(`${currentPlayer.name}'s turn`);
  const play = JSON.parse(prompt('Please enter his/her play: '));
  const currentPlayerMod = calculatePlayerScore(currentPlayer, play);
  console.log(`${currentPlayerMod.name} has ${currentPlayerMod.score} left`);
  if (currentPlayerMod.score !== 0) {
    return f([...otherPlayers, currentPlayerMod]);
  }
  return currentPlayerMod;
};

const Y = (f) => ((x) => x(x))((x) => f((y) => x(x)(y)));

/**
 * @param  {Array<string>} names
 * @returns {Array<Player>}
 */
const initialState = (...names) => names.map((name) => ({ name, score: 501 }));

/**
 * @param  {Array<string>} names
 */
const playGame = (...names) => {
  const players = initialState(...names);
  /** @type {Player} */
  const winner = Y(playRound)(players);
  console.log(`${winner.name} won`);
};

playGame('Moisés', 'Daniel', 'Matías');

import promptSync from 'prompt-sync';

const prompt = promptSync();

const getScoreFromThrow = (play) => {
  if (play === 'DB') {
    return 50;
  } else if (play === 'SB') {
    return 25;
  }
  return play.map((num) => Number(num)).reduce((acc, curr) => acc * curr, 1);
};

const calculatePoints = (points, plays) => Math.abs(
  plays.reduce((acc, play) => acc - getScoreFromThrow(play), points),
);

const calculatePlayerPoints = ({ name, points }, plays) => (
  { name, points: calculatePoints(points, plays) }
);

const playRound = f => (players) => {
  const [currentPlayer, ...otherPlayers] = players;
  console.log(`${currentPlayer.name}'s turn`);
  const play = JSON.parse(prompt('Please enter his/her play: '));
  const currentPlayerMod = calculatePlayerPoints(currentPlayer, play);
  console.log(`${currentPlayerMod.name} has ${currentPlayerMod.points} left`);
  if (currentPlayerMod.points !== 0) {
    return f([...otherPlayers, currentPlayerMod]);
  }
  return currentPlayerMod;
};

const Y = f => (x => x(x))(x => f(y => x(x)(y)));

const initGame = (...names) => names.map((name) => ({ name, points: 501 }));

const playGame = (...names) => {
  const players = initGame(...names);
  // const winner = playRound(players);
  const winner = Y(playRound)(players) ;
  console.log(`${winner.name} won`);
};

playGame('Moisés', 'Daniel', 'Matías');

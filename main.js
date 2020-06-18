const team = {
  _players: [
    {
      firstName: 'Mark',
      lastName: 'Reeves',
      age: 24
    },
    {
      firstName: 'Fred',
      lastName: 'Hopkins',
      age: 26
    },
    {
      firstName: 'Jessie',
      lastName: 'Evans',
      age: 22
    },
  ],
  
  _games: [
    {
      opponent: 'Bayern',
      teamPoints: 34,
      opponentPoints: 28,
      teamGoals: 2,
      opponentGoals: 1
    },
    {
      opponent: 'Madrid',
      teamPoints: 42,
      opponentPoints: 38,
      teamGoals: 1,
      opponentGoals: 1
    },
    {
      opponent: 'Barcelona',
      teamPoints: 48,
      opponentPoints: 58,
      teamGoals: 1,
      opponentGoals: 3
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
  this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints, teamGoals, opponentGoals) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints,
      teamGoals,
      opponentGoals
    };
  this.games.push(game);
  },

  totalGames() {
    return this.games.length;
  },

  averageGoals() {
    let avgTeam = Math.round((this.games.reduce((accum,item) => accum + item.teamGoals, 0) / this.totalGames()) * 10) / 10;
    let avgOpponent = Math.round((this.games.reduce((accum,item) => accum + item.opponentGoals, 0) / this.totalGames()) * 10) / 10;

    return `The team's scoring average is ${avgTeam} goals per match played while the opponent's scoring average is ${avgOpponent} goals per game.`;
  },

  teamAgeAverage() {
    let avg = Math.floor(this.players.reduce((accum, item) => accum + item.age, 0) / this.players.length);
    return `The team's age average is ${avg} years.`
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addPlayer('David', 'Cortina', 35);
team.addPlayer('Maria', 'Suarez', 19);

team.addGame('Milan', 42, 30, 3, 0);
team.addGame('Tottenham', 50, 48, 2, 1);
team.addGame('PSG', 46, 44, 2, 2);
team.addGame('Deportivo', 40, 38, 1, 3);
team.addGame('Leicester', 36, 28, 3, 2);

//console.log(team._players);
//console.log(team._games);
//console.log(team.totalGames());
//console.log(team.averageGoals());
//console.log(team.teamAgeAverage());

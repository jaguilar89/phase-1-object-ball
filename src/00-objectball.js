const game = gameObject();

function numPointsScored(playerName) { 
    return playerStats(playerName).points;
};

function shoeSize(playerName) {
    return playerStats(playerName).shoe;
};

function teamColors(teamName) {
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
};

function teamNames() {
    return [game._home.teamName, game._away.teamName];
};

function playerNumbers(teamName) {
    let arr = [];
    let roster  = teamPlayers(teamName);
    for (let player in roster) {
        arr.push(roster[player].number)
    }
    return arr;
};

function teamPlayers(teamName) {
    let playersObj;
    for (let team in game) {
        if (game[team].teamName === teamName) {
            playersObj = game[team].players
        }
    }
    return players;
};

function playerStats(playerName) {
    return game.players[playerName];
};

function bigShoeRebounds() {
    let largestShoeSize = Math.max(...Object.values(game.players)
                                            .map(player => player.shoe))
    for (let player in game.players) {
        if (game.players[player].shoe === largestShoeSize) {
            return `
            Shoe Size: ${largestShoeSize} 
            Rebounds: ${game.players[player].rebounds}
            `
            }
    }
}


function gameObject() {
    return {
        _home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        _away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood" : {
                    number: 3,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        },
        get home() { //Returns gameObject().home
            return this._home;
        },
        get away() { //Returns gameObject().away
            return this._away;
        },
        get homePlayers() { //Returns object containing players from the home team.
            return this._home.players;
        },

        get awayPlayers() { //Returns an object containing players from the away team.
            return this._away.players;
        },
        get players() { //Returns an object containing ALL players
            return Object.assign({}, this._home.players, this._away.players)
        }
    }
}




console.log(bigShoeRebounds())


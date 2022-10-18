function gameObject () {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {number: 0,shoe:16,points: 22,rebounds: 12,assists: 12,steals: 3,blocks: 1,slamDunks: 1},
                "Reggie Evans": {number: 30,shoe: 14,points: 12,rebounds: 12,assists: 12,steals: 12,blocks: 12,slamDunks: 7},
                "Brook Lopez": {number: 11,shoe: 17,points: 17,rebounds: 19,assists: 10,steals: 3,blocks: 1,slamDunks: 15},
                "Mason Plumlee": {number: 1,shoe: 19,points: 26,rebounds: 12,assists: 6,steals: 3,blocks: 8,slamDunks: 5},
                "Jason Terry": {number: 31,shoe: 15,points: 19,rebounds: 2,assists: 2,steals: 4,blocks: 11,slamDunks: 1}
                
            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {number: 4,shoe: 18,points: 10,rebounds: 1,assists: 1,steals: 2,blocks: 7, slamDunks: 2},
                "Bismak Biyombo": {number: 0,shoe: 16,points: 12,rebounds: 4,assists: 7,steals: 7,blocks: 15,slamDunks: 10},
                "DeSagna Diop": {number: 2,shoe: 14,points: 24,rebounds: 12,assists: 12,steals: 4,blocks: 5,slamDunks: 5},
                "Ben Gordon": {number: 8,shoe: 15,points: 33,rebounds: 3,assists: 2,steals: 1,blocks: 1,slamDunks: 0},
                "Brendan Haywood": {number: 33,shoe: 15,points: 6,rebounds: 12,assists: 12,steals: 22,blocks: 5,slamDunks: 12}
            }
        }
    }
}

// First function
function numPointsScored(playerName, value) {
    let game = gameObject();
    for (let gameKey in game) {
        let data = game[gameKey].players;
        if (data[playerName]) {
                console.log(data[playerName][value])
            } 
        }
    }
//numPointsScored("Jeff Adrien", "shoe");

// Second function
function teamColors(name) {
    let game = gameObject();
    for (let gameKey in game) {
        let data = game[gameKey];
        if (data.teamName === name) {
            console.log(data.colors)
        }

    }
}
//teamColors("Charlotte Hornets");

// Third function
function teamNames() {
    let game = gameObject();
    let newArray = [];
    for (let gameKey in game) {
        let data = game[gameKey];
        newArray.push(data.teamName);
    }
    console.log(newArray);
}
//teamNames();

//Foruth function
function playerNumbers(name) {
    let game = gameObject();
    for (let gameKey in game) {
        let data = game[gameKey];
        if (data.teamName === name) {
            let playersObj = data.players;
            let newArray = [];
            for (let eachPlayer in playersObj) {
                newArray.push(playersObj[eachPlayer].number)
                
            }
            console.log(newArray);
        }
    }
}
//playerNumbers("Charlotte Hornets")

// Fifth function
function playerStats(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
        let data = game[gameKey].players;
        if (data[playerName]) {
                console.log(data[playerName])
            } 
        }
}
//playerStats("Jeff Adrien");

// Sixth function
function bigShoeRebounds() {
    let game = gameObject();
    let highestShoeSoFar = 0;
    let NumberOfRebounds;
    for (let gameKey in game) {
        let data = game[gameKey].players;
        debugger
        for (let eachPlayer in data) {
            if (data[eachPlayer].shoe > highestShoeSoFar) {
                debugger
                highestShoeSoFar = data[eachPlayer].shoe;
                NumberOfRebounds = data[eachPlayer].rebounds;
                debugger
            }   
        }   
    }
    console.log(NumberOfRebounds);
}
// bigShoeRebounds();

// Bonus Questions
// First one
function mostPointsScored() {
    let game = gameObject();
    let highestPointsSoFar = 0;
    let playerName;
    for (let gameKey in game) {
        let data = game[gameKey].players;
        debugger
        for (let eachPlayer in data) {
            if (data[eachPlayer].points > highestPointsSoFar) {
                debugger
                highestPointsSoFar = data[eachPlayer].points;
                playerName = eachPlayer;
                debugger
            }   
        }   
    }
    console.log(playerName);
}
// mostPointsScored();

// Second one
function winningTeam() {
    let game = gameObject();
    let pointsAcc1 = 0;
    let pointsAcc2 = 0;
    let winningTeamName;
    for (let gameKey in game) {
        if (gameKey === "home") {
            let data = game.home.players;
            for (let eachPlayer in data) {
                pointsAcc1 = pointsAcc1 + data[eachPlayer].points; 
                debugger
            }
        } else if (gameKey === "away") {
            let data = game.away.players;
            for (let eachPlayer in data) {
                pointsAcc2 = pointsAcc2 + data[eachPlayer].points; 
                debugger
            }
        }
    }
    if (pointsAcc1 > pointsAcc2) {
        winningTeamName = game.home.teamName;
        console.log(winningTeamName);
        debugger
    } else {
        winningTeamName = game.away.teamName;
        console.log(winningTeamName);
        debugger
    }
}
// winningTeam();

// Third function
function playerWithLongestName() {
    let game = gameObject();
    let longestLengthSoFar = 0;
    let longestName;
    for (let gameKey in game) {
        let data = game[gameKey].players;
        debugger
        for (let eachPlayer in data) {
            if (eachPlayer.length > longestLengthSoFar) {
                debugger
                longestLengthSoFar = eachPlayer.length;
                longestName = eachPlayer;
                debugger
            }   
        }   
    }
    console.log(longestName);
}
// playerWithLongestName();

// Super Bonus
function doesLongNameStealATon(callback) {
    let game = gameObject();
    let longestLengthSoFar = 0;
    let longestName;
    let longestNameSteals;
    for (let gameKey in game) {
        let data = game[gameKey].players;
        debugger
        for (let eachPlayer in data) {
            if (eachPlayer.length > longestLengthSoFar) {
                debugger
                longestLengthSoFar = eachPlayer.length;
                longestName = eachPlayer;
                longestNameSteals = data[eachPlayer].steals
                debugger
            }   
        }   
    }  if (longestName === callback) {
        console.log(true);
    } else {
        console.log(false);
    }
}
doesLongNameStealATon(callback());

function callback() {
    let game = gameObject();
    let highestStealsSoFar = 0;
    let playerName1;
    for (let gameKey in game) {
        let data = game[gameKey].players;
        debugger
        for (let eachPlayer in data) {
            if (data[eachPlayer].steals > highestStealsSoFar) {
                debugger
                highestStealsSoFar = data[eachPlayer].steals;
                playerName1 = eachPlayer;
                debugger
            }   
        }   
    }
    return playerName1;
}
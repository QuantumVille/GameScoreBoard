let homeScore = 0;
let awayScore = 0;

let homeScoreBoard = document.getElementById("home-score");
let awayScoreBoard = document.getElementById("away-score");

function addOne(team){
    if(team == "home"){
        homeScore++;
        homeScoreBoard.textContent = homeScore;
    }else{
        awayScore++;
        awayScoreBoard.textContent = awayScore;
    }
}

function addTwo(team){
    if(team == "home"){
        homeScore += 2;
        homeScoreBoard.textContent = homeScore;
    }else{
        awayScore += 2;
        awayScoreBoard.textContent = awayScore;
    }
}

function addThree(team){
    if(team == "home"){
        homeScore += 3;
        homeScoreBoard.textContent = homeScore;
    }else{
        awayScore += 3;
        awayScoreBoard.textContent = awayScore;
    }
}
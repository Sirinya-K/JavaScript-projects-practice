let scores = [5, 10, 15, 20, 25, 30];
let x = 0;

let eachScores = scores.forEach((score) => {
    console.log(score);
});

let sumScores = scores.reduce((sum, score) => {
    return sum + score;
});
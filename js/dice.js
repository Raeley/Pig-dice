
var scores, roundScore, activePlayer, gamePlaying;

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
if (gamePlaying) {

var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById('result');
var randomNumber = Math.floor(Math.random() * 10) + 1;
var score = document.getElementById('score');
var totalescore = 10;

function check() {
    var enterednumber = guessnumber.value;

    if (enterednumber == '') {
        result.textContent = 'Please enter a number!';
        result.style.color = 'red';
        return;
    }

    if (randomNumber == enterednumber) {
        result.textContent = 'Congratulations, You guessed it right!';
        result.style.color = 'green';
        alert("Congrats! You guessed the right number.");
    } else {
        totalescore = totalescore - 1;
        score.textContent = 'Score: ' + totalescore;
        result.textContent = 'Wrong! Try again.';
        result.style.color = 'red';

        if (totalescore <= 0) {
            result.textContent = 'Game Over! You have no more attempts left.';
            result.style.color = 'red';
            guessnumber.disabled = true;
            alert('Game Over!');
        }
    }
}

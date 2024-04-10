let result = '';
let choice = '';

let scoreCard = JSON.parse(localStorage.getItem('score'));
// We check an condition to check if the scoreCard is null or not if null we just create the scoreCard
// for the below code read the error occurred in this removeItem Process mentioned below to the program
if (scoreCard === null) {
    scoreCard = {
        win: 0,
        loose: 0,
        tie:0
    };
}

function computerChoice(){
    choice = Math.random();
    if (choice > 0 && choice < 1/3){
        choice = 'Rock';
    }
    else if (choice >= 1/3 && choice <= 2/3){
        choice = 'Paper';
    }
    else if (choice > 2/3 && choice <= 1){
        choice = 'Scissor';
    }
    return choice;
}
/*
Now we make our code more flexible, means we don't want this many functions to use we simply pass parameters and checks for the respective conditions...
*/
function runGame(playerChoice){
    choice = computerChoice();
    let heading1 = document.querySelector('.heading-1');
    let heading2 = document.querySelector('.heading-2');
    if (playerChoice == 'Rock'){
        if (choice == 'Rock') {
            result = 'Tie';
            scoreCard.tie = scoreCard.tie + 1; 
        }
        else if (choice === 'Paper') {
            result = 'You Loose';
            scoreCard.loose = scoreCard.loose + 1;
        }
        else if (choice == 'Scissor') {
            result = 'You Win';
            scoreCard.win = scoreCard.win + 1;
        }
    }
    else if (playerChoice === 'Paper') {
        if (choice == 'Paper') {
            result = 'Tie';
            scoreCard.tie = scoreCard.tie + 1;    
        }
        else if (choice == 'Rock') {
            result = 'You Win';
            scoreCard.win = scoreCard.win + 1;
        }
        else if (choice == 'Scissor') {
            result = 'You Loose';
            scoreCard.loose = scoreCard.loose + 1;
        }
    }
    else if (playerChoice === 'Scissor') {
        if (choice == 'Scissor') {
        result = 'Tie';
        scoreCard.tie = scoreCard.tie + 1;
        }
        else if (choice == 'Paper') {
            result = 'You Win';
            scoreCard.win = scoreCard.win + 1;
        }
        else if (choice == 'Rock') {
            result = 'You Loose';
            scoreCard.loose = scoreCard.loose + 1;
        } 
    }
    else if (playerChoice == 'Reset') {
        scoreCard.win = 0;
        scoreCard.loose = 0;
        scoreCard.tie = 0;

        localStorage.removeItem('score');
        

        let totalMatches = scoreCard.win + scoreCard.loose + scoreCard.tie;

        heading1.innerText = 'Score was Reseted!';

        heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        return;
    }
    // we used return keyword when we call the function with reset parameter that's why it is not setting the scoreCard value to 0.
    // Because of return keyword it ends at that line.

    // we update each score when player plays the game.
    localStorage.setItem('score',JSON.stringify(scoreCard));

    // this total matches implemented by me
    let totalMatches = scoreCard.win + scoreCard.loose + scoreCard.tie; 
    // We are changing font to emoji using if else  
    // Scissor -> ✌️
    // Paper -> 🖐
    // Rock -> ✊
    if (playerChoice == 'Rock') {
        if (choice === 'Rock') {
            heading1.innerText = `You Picked ✊ and Computer Picked ✊.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Paper') {
            heading1.innerText = `You Picked ✊ and Computer Picked 🖐.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Scissor') {
            heading1.innerText = `You Picked ✊ and Computer Picked ✌️.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
    }
    else if (playerChoice == 'Paper') {
            if (choice === 'Rock') {
            heading1.innerText = `You Picked 🖐 and Computer Picked ✊.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Paper') {
            heading1.innerText = `You Picked 🖐 and Computer Picked 🖐.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Scissor') {
            heading1.innerText = `You Picked 🖐 and Computer Picked ✌️.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
    }
    else if (playerChoice == 'Scissor') {
        if (choice === 'Rock') {
            heading1.innerText = `You Picked ✌️ and Computer Picked ✊.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Paper') {
            heading1.innerText = `You Picked ✌️ and Computer Picked 🖐.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }
        else if (choice === 'Scissor') {
            heading1.innerText = `You Picked ✌️ and Computer Picked ✌️.\n${result}!\n`;
            heading2.innerText = `Total Matches: ${totalMatches}\nWins: ${scoreCard.win} Loose: ${scoreCard.loose} Tie: ${scoreCard.tie}`;
        }   
    }
}
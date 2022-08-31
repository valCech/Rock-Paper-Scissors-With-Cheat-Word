// Input player's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase ();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' 
    || userInput === 'bomb'){
    return userInput;
    } else {
      console.log('error');
  }
};
console.log(getUserChoice('Paper')); // 'paper'
console.log(getUserChoice('fork')); // 'Error!' and `undefined`
console.log(typeof getUserChoice); //  function

// Generate CPU's choice
function getComputerChoice () {
 ranNum = (Math.floor(Math.random() * 3));
   if (ranNum == 0) {
     return 'paper';
   }
   else if (ranNum == 1) {
     return 'rock';
   }
   else if (ranNum == 2) {
     return 'scissors';
   }
};
console.log(getComputerChoice()); // paper || rock || scissors


// Now it’s time to determine a winner.
function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }
  if (userChoice === 'bomb') { 
    return 'Booooom you won!';
  }
  else if ( userChoice === 'paper' && computerChoice === 'scissors') {
    return 'You lost!';
  }
  else if ( userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won!';
  }
  else if ( userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  }
  else if ( userChoice === 'rock' && computerChoice === 'paper') {
    return 'You lost!';
  }
  else if ( userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You won!';
  }
  else if ( userChoice === 'scissors' && computerChoice === 'rock') {
    return 'You lost!';
  } };

  console.log(determineWinner('paper', 'scissors'));  //you lost!
  console.log(determineWinner('paper', 'paper'));    //it's a tie
  console.log(determineWinner('paper', 'rock'));    //you won!


/* An another option the write the if statement for this game:
 if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
  }   else {
      return 'You won!';
  }
}   
*/

// Now you need to start the game and log the results.
const playGame = () => {
  const userChoice = getUserChoice ('rock'); // test input, 
                                            // try CHEAT word 'bomb'
  
  const computerChoice = getComputerChoice ();
  
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

// An another way to call choices:  
  //console.log(`You threw ${userChoice}`);
  //console.log(`The computer threw ${computerChoice}`);

 

console.log('hi');
const computerWins = 'Computer Wins!';
const userWins= 'User Wins!';
const getUserChoice= userInput=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
    return userInput;
  }
  else{
    console.log('Please enter a valid choice: rock, paper, or scissors');
  }
}

function getComputerChoice(){
  var number = Math.floor(Math.random()*3);

  switch(number){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
    default:
    console.log('not a valid choice from the computer');
  }
}

function determineWinner(userChoice,computerChoice){
  if(userChoice===computerChoice){
    return 'Tie';
  }
  else if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return computerWins;
    }
    else{
      return userWins;
    }
  }
  else if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return computerWins;
    }
    else{
      return userWins;
    }
  }
  else if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return computerWins;
    }
    else{
      return userWins;
    }
  }
  else if (userChoice ==='bomb'){
    return userWins;
  }

}
function playGame(){
  var userChoice = getUserChoice('bomb');
  console.log('User choice is: '+userChoice)
  var computerChoice = getComputerChoice();
  console.log('Computer choice is: '+computerChoice);

  console.log(determineWinner(userChoice,computerChoice));

}

playGame();

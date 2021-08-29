//code between lines 4 and 12 doesn't work. trying to get code 
//to show up in browser

const nameHere = document.getElementById("name-here");
const nameWord = document.getElementById("name-word");
const sayName = document.getElementById("say-name");

sayName.addEventListener('click', function(){
 if (nameWord.value !==""){
   nameHere.innerText = nameWord.value;
 } else {nameHere.innerText = "what is your name?"}
});

//create two variables to store player names
const playerOneName = document.getElementById("name-player-one").value;
const playerTwoName = document.getElementById("name-player-two").value;

//function to greet player by name
function greetPlayer() {
    const playerName = document.getElementsByClassName("player").value;
    return "Hi " +  playerName + " ! ";
 }

 if (playerOneName) return greetPlayer();
 if (playerTwoName) return greetPlayer();
 
//greets one or two players
input.addEventListener('click', function() {
  const numPlayers = document.getElementById("one-or-two");
  if (numPlayers = 1) {
   let input1 = document.getElementById("submit1").value;
     input1.addEventListener('click', function() {
   let greeting = greetPlayer();
      return greeting;
     });  
   
   } else if (numPlayers = 2 && playerTwoName) {
             let input1 = document.getElementById("submit1").value;
             input1.addEventListener('click', function() {
             let greeting = greetPlayer();
             return greeting;
             });
             let input2 = document.getElementById("submit2").value; 
             input2.addEventListener('click', function(){
             let greeting = greetPlayer();
               return greeting; 
             });
          }
  });

//if there is no player2, how do I set up player two to be the computer? 

//choose who goes first if there are two players 
function choosePlayer (playerOneName, playerTwoName) {
  if (!playerTwoName) return "Player 1 goes first";

  if (playerOneName && playerTwoName) 
   let oneOrTwo = Math.floor(Math.random() * 2 + 1);   //? problem here
  
  if (oneOrTwo = 1) return "Player 1 goes first and Player 2 chooses X or O first.";
     return "Player 2 goes first and Player 1 chooses X or O first."
}

//Need a function here, players can't choose the same letter
//whoever chooses X, O is assigned to the other or vice versa

//Need a function to show if a square is already taken

//Only X or O allowed as inputs 
//something is wrong here, too
//tells player if square is already taken 
function onlyXorO() {
  
 let squareInput = document.getElementsByClassName("square");
  squareInput.addEventListener('click', function() {
    if (squareInput !== 'O' || squareInput !== 'X') return "X or O";
    if (squareInput === 'x' || squareInput === 'o') return squareInput.toUpperCase();
  return squareInput;
 });

 let squareChar = [];  //array to store 9 characters, Xs or Os

 let squareOneContent = document.getElementById("square1");
  if (squareOneContent !== "") return "try an empty square";
  if (squareOneContent !== 'X' || squareOneContent !== 'O') 
    return "X or O";
   squareChar.push(squareOneContent);

 let squareTwoContent = document.getElementById("square2");
   if (squareTwoContent !== "") return "try an empty square";
   if (squareTwoContent !== 'X' || squareOneContent !== 'O' ) return "X or O";
     squareChar.push(squareTwoContent);
     
 let squareThreeContent = document.getElementById("square3");
  if (squareThreeContent !== "") return "try an empty square";
  if (squareThreeContent !== 'X' || squareThreeContent !== 'O' ) return "X or O";
    squareChar.push(squareThreeContent);
  
 let squareFourContent = document.getElementById("square4");
  if (squareFourContent !== "") return "try an empty square";
  if (squareFourContent !== 'X' || squareThreeContent !== 'O' ) return "X or O";
        squareChar.push(squareFourContent);
 
 let squareFiveContent = document.getElementById("square5");
  if (squareFiveContent !== "") return "try an empty square";
  if (squareFiveContent !== 'X' || squareFiveContent !== 'O' ) return "X or O";
    squareChar.push(squareThreeContent);

 let squareSixContent = document.getElementById("square6");
   if (squareSixContentif !== "") return "try an empty square"; 
   if (squareSixContent !== 'X' || squareSixContent !== 'O' ) return "X or O";
   squareChar.push(squareSixContent);

 let squareSevenContent = document.getElementById("square7");
  if (squareSevenContent !== "") return "try an empty square";
  if (squareSevenContent !== 'X' || squareSevenContent !== 'O' ) return "X or O";
    squareChar.push(squareSevenContent);
      
 let squareEightContent = document.getElementById("square8");
  if (squareEightContent !== "") return "try an empty square";
  if (squareEightContent !== 'X' || squareEightContent !== 'O' ) return "X or O";
     squareChar.push(squareThreeContent);

 let squareNineContent = document.getElementById("square9");
  if (squareNineContent !== "") return "try an empty square";
  if (squareNineContent !== 'X' || squareNineContent !== 'O' ) return "X or O";
    squareChar.push(squareNineContent);

//check to see if there are Xs or Os in a row
let winLoseMessage = "";
const endGameMessage = document.getElementById(win-lose-tie);

if (squareChar[0] === squareChar[1] === squareChar[0] === "O" ||
    squareChar[3] === squareChar[4] === squareChar[5] === "O" ||
    squareChar[6] === squareChar[7] === squareChar[8] === "O" ||
    squareChar[0] === squareChar[3] === squareChar[6] === "O" ||
    squareChar[1] === squareChar[4] === squareChar[7] === "O" ||
    squareChar[2] === squareChar[5] === squareChar[8] === "O" ||
    squareChar[0] === squareChar[4] === squareChar[8] === "O" ||
    squareChar[2] === squareChar[4] === squareChar[6] === "O" )

    winLoseMessage = "Os win!";

  if (squareChar[0] === squareChar[1] === squareChar[0] === "X" ||
      squareChar[3] === squareChar[4] === squareChar[5] === "X" ||
      squareChar[6] === squareChar[7] === squareChar[8] === "X" ||
      squareChar[0] === squareChar[3] === squareChar[6] === "X" ||
      squareChar[1] === squareChar[4] === squareChar[7] === "X" ||
      squareChar[2] === squareChar[5] === squareChar[8] === "X" ||
      squareChar[0] === squareChar[4] === squareChar[8] === "X" ||
      squareChar[2] === squareChar[4] === squareChar[6] === "X" )
    
      winLoseMessage =  "Xs won!";

  else winLoseMessage = "It's a tie.";
  winLoseMessage = endGameMessage.innerText;
}

//remove contents from squares, reset game 
function reset () {
 const resetGame = document.getElementById("reset-game");
 resetGame.addEventListener('click', function(clickEvent){
  if (clickEvent.target.matches('O') || clickEvent.target.matches("X"))
  clickEvent.target.innerText.remove(squareOneContent);
  clickEvent.target.innerText.remove(squareTwoContent);
  clickEvent.target.innerText.remove(squareThreeContent);
  clickEvent.target.innerText.remove(squareFourContent);
  clickEvent.target.innerText.remove(squareFiveContent);
  clickEvent.target.innerText.remove(squareSixContent);
  clickEvent.target.innerText.remove(squareSevenContent);
  clickEvent.target.innerText.remove(squareEightContent);
  clickEvent.target.innerText.remove(squareNineContent);
 return resetGame;
 });
}     




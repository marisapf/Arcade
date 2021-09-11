//Trial greet message for one person
const nameHere = document.getElementById("name-here");
const nameWord = document.getElementById("name-word");
const sayName = document.getElementById("say-name");

sayName.addEventListener('click', function(){
 if (nameWord.value !=="") nameHere.innerText = "Hi " + nameWord.value;
  else nameHere.innerText = "Enter your name."
});

//create two variables to store player names
const playerOneName = document.getElementById("name-player-one");
const playerTwoName = document.getElementById("name-player-two");
//place in html/broswer for the text of greeting players
const greetOneHolder = document.getElementById("greet-one-holder");
const greetTwoHolder = document.getElementById("greet-two-holder");
//variable with event listener
const submitOne = document.getElementById("submit1");
const submitTwo = document.getElementById("submit2");

//greets player one
submitOne.addEventListener('click', function(){
 if (playerOneName.value !=="") greetOneHolder.innerText = "Hi " + playerOneName.value;
  else greetOneHolder.innerText = "Enter your name."
});
//greets player two 
submitTwo.addEventListener('click', function(){
  if (playerTwoName.value !=="") greetTwoHolder.innerText = "Hi " + playerTwoName.value;
   else greetTwoHolder.innerText = "Enter your name."
 });

//function to greet player by name, this function is not used
//Would like to use this function that takes player name as argument
//and use with submitOne and submitTwo above, needs event listener
function greetPlayer() {
    let player= document.getElementsByClassName("player");
    let greetingHolder = document.getElementsByClassName("greeting-holder");
    greetingHolder.innerText = "Hi " +  player + " ! ";
 }

 //there must be two players because...?
 //if there is no player2, how do I set up player two to be the computer? 
const numPlayers = document.getElementById("number-of");
const oneOrTwo = document.getElementById("one-or-two");
const playerMessage = document.getElementById("player-message");
numPlayers.addEventListener('click', function() {
  if (oneOrTwo.value < 2) playerMessage.innerText = "You need two players." 
  else if (oneOrTwo.value > 2) playerMessage.innerText = "You can only have two players."
  else if (oneOrTwo.value !== "number") playerMessage.innerText = "Invalid number."
  else playerMessage.innerText = "Hello players!"
  console.log(oneOrTwo.value)
      
  });

//choose who goes first if there are two players 
//have a place to put those names in html/browser
const whoFirst = document.getElementById("who-first-holder");
const whichPlayerFirst = document.getElementById("which-player-first");

whichPlayerFirst.addEventListener('click', function() {
  let oneTwo = Math.floor(Math.random() * 2 + 1); 
  if (oneTwo === 1) whoFirst.innerText = playerOneName.value + " goes first and " + playerTwoName.value + " chooses X or O first.";
   whoFirst.innerText = playerTwoName.value + " goes first and " + playerOneName.value + " chooses X or O first.";
  //console.log(oneTwo);
  });

//Need a function here, players can't choose the same letter
//whoever chooses X, O is assigned to the other or vice versa
//place to put in html/browser

const whoXorO = document.getElementById("X-or-O-holder");
//game message who is X, O
const squareContent = document.querySelectorAll(".square");
//variable that is the content of squares 
const squareMessage = document.getElementById("square-message");
//where to put error messages 
let tryOtherSquare = document.getElementById("try-empty-square");
//tells player if square is already taken 
let squareChar = [];  //array to store 9 characters, Xs or Os

squareContent.addEventListener('select', function(){
  if (squareContent.innerText === 'x' || squareContent.innerText === 'o') squareMessage.innerText = "please use upper case X or O."
  if (squareContent.innerText !== 'O' || squareContent.innerText !== 'X') squareMessage.innerText = "X or O only."
  return squareContent.innerText;
});

let squareOneContent = document.getElementById("square1");
 if (squareOneContent !== "") 
  tryOtherSquare.innerText = "Try an empty square.";
 if (squareOneContent !== 'X' || squareOneContent !== 'O')
  squareMessage.innerText = "X or O only."
  squareChar.push(squareOneContent);

let squareTwoContent = document.getElementById("square2");
 if (squareTwoContent !== "") 
  tryOtherSquare.innerText = "Try an empty square.";
 if (squareTwoContent !== 'X' || squareTwoContent !== 'O')
 squareMessage.innerText = "X or O only."
  squareChar.push(squareTwoContent);

let squareThreeContent = document.getElementById("square3");
 if (squareThreeContent !== "") 
  tryOtherSquare.innerText = "Try an empty square.";
 if (squareThreeContent !== 'X' || squareThreeContent !== 'O')
  squareMessage.innerText = "X or O only."
  squareChar.push(squareThreeContent);
     
let squareFourContent = document.getElementById("square4");
  if (squareFourContent !== "") 
   tryOtherSquare.innerText = "Try an empty square.";
  if (squareFourContent !== 'X' || squareFourContent !== 'O')
   squareMessage.innerText = "X or O only."
    squareChar.push(squareFourContent);
  
let squareFiveContent = document.getElementById("square5");
 if (squareFiveContent !== "") 
  tryOtherSquare.innerText = "Try an empty square.";
 if (squareFiveContent !== 'X' || squareFiveContent !== 'O')
  squareMessage.innerText = "X or O only."
  squareChar.push(squareFiveContent);
 
let squareSixContent = document.getElementById("square6");
  if (squareSixContent !== "") 
   tryOtherSquare.innerText = "Try an empty square.";
  if (squareSixContent !== 'X' || squareSixContent !== 'O')
  squareMessage.innerText = "X or O only."
   squareChar.push(squareSixContent);

 let squareSevenContent = document.getElementById("square7");
  if (squareSevenContent !== "") 
   tryOtherSquare.innerText = "Try an empty square.";
 if (squareSevenContent !== 'X' || squareSevenContent !== 'O')
 squareMessage.innerText = "X or O only."
  squareChar.push(squareSevenContent);
      
 let squareEightContent = document.getElementById("square8");
  if (squareEightContent !== "") 
   tryOtherSquare.innerText = "Try an empty square.";
  if (squareEightContent !== 'X' || squareEightContent !== 'O')
  squareMessage.innerText = "X or O only." 
   squareChar.push(squareEightContent);

 let squareNineContent = document.getElementById("square9");
 if (squareNineContent !== "") 
  tryOtherSquare.innerText = "Try an empty square.";
 if (squareNineContent !== 'X' || squareNineContent !== 'O')
 squareMessage.innerText = "X or O only."
  squareChar.push(squareNineContent);

//check to see if there are Xs or Os in a row
const endGameMessage = document.getElementById("end-game-message");

if (squareChar[0] === squareChar[1] === squareChar[0] === "O" ||
    squareChar[3] === squareChar[4] === squareChar[5] === "O" ||
    squareChar[6] === squareChar[7] === squareChar[8] === "O" ||
    squareChar[0] === squareChar[3] === squareChar[6] === "O" ||
    squareChar[1] === squareChar[4] === squareChar[7] === "O" ||
    squareChar[2] === squareChar[5] === squareChar[8] === "O" ||
    squareChar[0] === squareChar[4] === squareChar[8] === "O" ||
    squareChar[2] === squareChar[4] === squareChar[6] === "O" )

endGameMessage.innerText = "Os win!";

  if (squareChar[0] === squareChar[1] === squareChar[0] === "X" ||
      squareChar[3] === squareChar[4] === squareChar[5] === "X" ||
      squareChar[6] === squareChar[7] === squareChar[8] === "X" ||
      squareChar[0] === squareChar[3] === squareChar[6] === "X" ||
      squareChar[1] === squareChar[4] === squareChar[7] === "X" ||
      squareChar[2] === squareChar[5] === squareChar[8] === "X" ||
      squareChar[0] === squareChar[4] === squareChar[8] === "X" ||
      squareChar[2] === squareChar[4] === squareChar[6] === "X" )
    
endGameMessage.innerText =  "Xs won!";

else endGameMessage.innerText = "It's a tie.";
 


//remove contents from squares, reset game 
//not sure which to use? 


//I did a reset function and somehow other parts of code didn't work 
//so it is commented out 


/* const resetGame = document.getElementById("reset-game");
 resetGame.addEventListener('click', function(){
  squareChar = [];
  squareContent.innerText = "";
  nameWord.value = "";
  nameHere.innerText = "";
  playerOneName.value = "";
  playerTwoName.value = "";
  greetOneHolder.innerText = "";
  greetTwoHolder.innerText = "";
  oneOrTwo.value = "";
  whoFirst.innerText = "";
  endGameMessage.innerText = "";
 });
*/

const resetGame = document.getElementById("reset-game");
 resetGame.addEventListener('click', function() {
  squareOneContent.innerText = "";
  squareTwoContent.innerText = "";
  squareThreeContent.innerText = "";
  squareFourContent.innerText = "";
  squareFiveContent.innerText = "";
  squareSixContent.innerText = "";
  squareSevenContent.innerText = "";
  squareEightContent.innerText = "";
  squareNineContent.innerText = "";
});

resetGame.addEventListener('click', function() {
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
     




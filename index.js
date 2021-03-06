function getDefaultState() {
  return {
    choices: ['Paper', 'Rock', 'Scissors'],
    playerChoice:'',
    computerChoice:'',
    message:'Welcome <span> player</span>, your move.',
    resultMessage:'',
  };
}

let state = {...getDefaultState()};

function computerChooses(){
  state.computerChoice = state.choices[Math.floor(Math.random() * 3)]
  console.log(state.computerChoice);
}


function checkGame(playerChoice, computerChoice ){
  computerChooses();

  // const { playerChoice, computerChoice } = state;
	let winner = null
	if(state.playerChoice === 'Rock') {
		if(state.computerChoice === 'Paper') {winner = 'computer'}
		if(state.computerChoice === 'Scissors') {winner = 'player'}
  } 
  else if( state.playerChoice === 'Scissors'){
		if(state.computerChoice === 'Paper') {winner = 'player'}
		if(state.computerChoice === 'Rock') {winner = 'computer'}
  } 
  else {
		if(state.computerChoice === 'Scissors') {winner = 'computer'}
		if(state.computerChoice === 'Rock') {winner = 'player'}
  }
  if(!winner) {
    winner = 'no one'
  }
  state.resultMessage = `<div> Player chose: ${state.playerChoice} 
  <hr /> Computer chose: ${state.computerChoice}.
  <hr /> ${winner} wins.</div>`
render();
}

function chooseRock(){
  state.playerChoice = state.choices[1];
  console.log(state.playerChoice);
  checkGame();
}

function choosePaper(){
  state.playerChoice = state.choices[0];
  console.log(state.playerChoice);
  checkGame();
}

function chooseScissors(){
  //recognise state.choices [2] is the answer
  state.playerChoice = state.choices[2];
  console.log(state.playerChoice);
  //compare player choice to computer choice
  checkGame();
}




function render(){
  let htmlStr = `
  <div>
    <h1>Rock Paper Scissors</h1>

    <div>
    ${state.message}
    </div>
    
    <br />
    <div class='choices'>
    <div onclick='chooseRock()'>
    rock
    </div>
    </div>
    <div class='choices'>
    <div onclick='choosePaper()'>
    paper
    </div>
    </div>
    <div class='choices'>
    <div onclick='chooseScissors()'>
    scissors
    </div>
    </div>
    <br />
    <h3>
    ${state.resultMessage}
    </h3>


  </div>
  `;
  document.getElementById("app").innerHTML = htmlStr;

}

render();


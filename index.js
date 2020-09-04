function getDefaultState() {
  return {
  players_turn: 'X',
  board: ['-','-','-','-','-','-','-','-','-'],
  winner: false
  };
}

let state = {...getDefaultState()};

function render(){
  let htmlStr = `
  <div>
    <h1>Rock Paper Scissors</h1>

    <div>
    
    </div>
  </div>
  `;
  document.getElementById("app").innerHTML = htmlStr;
}

render();
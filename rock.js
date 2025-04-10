let score=JSON.parse(localStorage.getItem('score'));
if(score==null){
  score = {
    win: 0,
    lose: 0,
    ties: 0,
  };
}
/*there are other method like using || , !*/
//null & undefined works same
function reset(){
 
  localStorage.removeItem('score');
  alert("Score is reset");
}
function ShowScore(){
   alert(`
Win :${score.win}
Lose :${score.lose}
Tie :${score.ties}`);
}
function RandomiseNumber(){
  let choice;
    const random=Math.random();
    if(random>=0&&random<1/3) 
    {

        choice="Rock";
    }
    else if(random>=1/3&&random<2/3){
        choice="Paper";
    }
    else if(random>=2/3&&random<1){

        choice="Scissors";
    }
    return choice;
  }
  function player(playerMove){
    const computerMove=RandomiseNumber();
    let result;
    if (playerMove == "Rock") {
      if (computerMove == "Rock") {
        result = "Tie";
      } else if (computerMove == "Scissors") {
        result = "Win";
      } else if (computerMove == "Paper") {
        result = "Lose";
      }
    } else if (playerMove == "Paper") {
      if (computerMove == "Rock") {
        result = "Win";
      } else if (computerMove == "Scissors") {
        result = "Lose";
      } else if (computerMove == "Paper") {
        result = "Tie";
      }
    } else if (playerMove == "Scissors") {
      if (computerMove == "Rock") {
        result = "Lose";
      } else if (computerMove == "Scissors") {
        result = "Tie";
      } else if (computerMove == "Paper") {
        result = "Win";
      }
    }
    if(result=='Win'){
      score.win+=1;
    }
    else if(result=='Lose'){
      score.lose+=1;
    }
    else if(result=='Tie'){
      score.ties+=1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    alert(`
You pick:${playerMove}
Computer pick :${computerMove}
Result:${result}
Win :${score.win}
Lose :${score.lose}
Tie :${score.ties}`);
}

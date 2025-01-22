const choices = document.querySelectorAll(".choice");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");
const msg=document.querySelector("#msg");
let score1=0;
let score2=0;
const playgame = (userOption) => {
    console.log(`user choice=${userOption}`)
    computerChoice();
    if (userOption === compChoice) {
        drawgame();
    } else {
      let userWin=true;
      if (userOption === "rock"){
          userWin=compChoice=="paper"?false:true
      }
       else if (userOption === "scissors"){
          userWin=compChoice=="rock"?false:true;
      } 
      else {
       userWin=compChoice=="scissors"?false:true;
      }
      winner(userWin,userOption,compChoice);
    }
};
const drawgame=(userOption,compChoice)=>{
    if(userOption===compChoice)
    msg.innerText=`game was draw play again!` ;
    msg.style.backgroundColor="black";
}

const computerChoice = () => {
  let options = ["rock", "scissors", "paper"];
  index = Math.floor(Math.random() * 3);
  compChoice = options[index];
  console.log(`comp choice =${compChoice}`);
};

const winner = (userWin,userOption,compChoice) => {
    if(userWin){
        console.log(`you win`)
        score1++
      userScore.innerText=score1;
      msg.innerText=`You Won! You beat ${compChoice}`;
      msg.style.backgroundColor="green";

    }else{
        console.log(`you lose`)
        score2++;
        compScore.innerText=score2;
        msg.innerText=`You lost! computer beat ${userOption}`;
        msg.style.backgroundColor="red";
    }
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userOption = choice.getAttribute("id");
    playgame(userOption);
  });
});

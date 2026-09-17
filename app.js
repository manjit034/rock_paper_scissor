
let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore_trace=document.querySelector("#user-score");
const compScore_trace=document.querySelector("#comp-score");


const gencompChoice = ()=>{
    const option= ["rock","paper","scissor"];
    const opIndx=Math.floor(Math.random()*3);
    /**
     * Math.random() give random nmbr 0 to 1 in floating.
     * and multiplication of 3 to that function givs less than 3 number (0 to 2.something)
     * Math.floor(Math.random()*3); , floor gives exact int lower value of the number 
     * such as (2.86->2, 1.39->1, 0.88->0)
     */
    
    console.log("comChoice=",option[opIndx]);
    return option[opIndx];
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScore_trace.innerText=userScore;
        msg.innerText=`you win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScore_trace.innerText=compScore;
        msg.innerText=` You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame =(userChoice)=> {
    const compChoice=gencompChoice();

    if(userChoice===compChoice){
        msg.innerText="Game draw! play again";
        msg.style.backgroundColor="rgb(9, 9, 42)";
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            /* compChoice must be -> "paper" or "scissor" , cuz if compChoice is rock too
            then it must be draw by above condition */
             userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            /* compChoice must be -> "rock" or "scissor" */
            userWin= compChoice==="scissor"? false:true;
        }else{
            /* compChoice must be -> "rock" or "paper" */
            userWin=compChoice==="rock"?false:true;

        }
        showWinner(userWin, userChoice,compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        console.log("userChoice=", userChoice);
        
        playGame(userChoice)
    });
});
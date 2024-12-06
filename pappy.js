let userscore=0;
let compscore=0;
let priority=document.querySelectorAll(".choice");
let mag=document.querySelector("#msg");
let userS=document.querySelector("#user-score");
let compS=document.querySelector("#comp-score");
let userwin=true;
priority.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("button was clicked");
        playgame(userChoice);
    })
});
const playgame=(userChoice)=>{
    console.log("userchoice=", userChoice);
    const compChoice=getcompchoice();
    console.log("compchoice=",compChoice);
    if(userChoice===compChoice){
        drawgame();
    }else{
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner();
    }
}
const getcompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("game is draw");
    mag.innerText="Game was Draw";
    mag.style.backgroundColor="navy";
}
const showwinner=()=>{
    if(userwin){
        userscore++;
        userS.innerText=userscore;
        console.log("you win");
        mag.innerText="You Win";
        mag.style.backgroundColor="green";
    }else{
        compscore++;
        compS.innerText=compscore;
        console.log("you lose");
        mag.innerText="You Lose";
        mag.style.backgroundColor="red";
    }
}
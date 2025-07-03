

 let userScore=0;
 let compScore=0

 let allchoices=document.querySelectorAll(".choice");
 let mssg=document.querySelector(".msg");
 let uScore=document.querySelector(".user-score");
 let cScore=document.querySelector(".comp-score");
 

 allchoices.forEach((choiceee)=>{
    choiceee.addEventListener("click",()=>{
        let userChoice=choiceee.getAttribute("id"); 
         console.log(userChoice);
        playGame(userChoice); // //
     
    })
 });

 const playGame=(userChoice)=>{
let compChoice=compAuto();
if(userChoice===compChoice){
    draw(userChoice,compChoice);
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin =compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true
    }
winner(userWin,userChoice,compChoice);
}
 
 };

 const winner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    uScore.innerText= userScore;
    mssg.innerText=` YOU WON AS your ${userChoice} defeated ${compChoice}`;
    mssg.style.backgroundColor="green";
    }else{
        compScore++;
        cScore.innerText=compScore;
       mssg.innerText=` YOU LOSS AS ${compChoice} defeated your ${userChoice}`;
    mssg.style.backgroundColor="red";  
    }
 };
const draw=(userChoice,compChoice)=>{
mssg.innerText=`game drawn as ${userChoice} and ${compChoice} are same`;
mssg.style.backgroundColor="blue";

};


 const compAuto=()=>{
    const options=["rock","paper","scissor"];
    let auto=Math.floor(Math.random()*3);
    return options[auto];
 };

 
 
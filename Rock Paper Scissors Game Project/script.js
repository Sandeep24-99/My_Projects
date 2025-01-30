let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        console.log("choice was clicked!!");
    })
});
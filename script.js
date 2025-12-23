// define question and answers in array 
var question = [
    {
    question: "Hyper Text Markup Language Stands For?",
    choices: ["JQuerry","XHTML", "CSS", "HTML"],
    answer:"HTML",
},
{
    question: "Cascading Style Sheets Stands For?",
    choices: ["HTML","JQuerry", "CSS", "XML"],
    answer:"CSS",
},
{
    question: "Which is a JavaScript Framework/Library?",
    choices: ["React","Laravel", "Django", "Sass"],
    answer:"React",
},
{
    question: "Which is a bacend Language?",
    choices: ["PHP","HTML", "React", "All"],
    answer:"PHP",
},
{
    question: "Which is best for Artificical Intelligence?",
    choices: ["React","Laravel", "Python", "Sass"],
    answer:"Python",
},
];
var currentQuestionIndex = 0;
var score = 0;

// Display Question

function displayQuestion(){
    if(currentQuestionIndex < question.length){
        var 
    }
}





//start condown timer
var timeleft = 60;
var countdownElement = document.getElementById("count-down");

function startCountdown(){
    var timer = setInterval(function (){
        if (timeleft < 0){
            clearInterval(timer);
        }else{
            countdownElement.innerText ="TimeLeft " + timeleft +" seconds"
            timeleft--;
        }
    },1000);
}
startCountdown();
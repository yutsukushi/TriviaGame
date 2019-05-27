// GLOBAL VARIABLES

var allowedTime = 30;


var timer = allowedTime;
var countdown;
var nextQTimer;
var correct = 0;
var wrong = 0;
var unanswered = 0;

var pTag = $("p");
var questionHTML = $(".question");
var answerHTML = $(".answers");

var displayTimer = $(".displayTimer");

//-----------------------------------------------------------------------

$(document).ready(function() { //once page is fully loaded, then the game is ready to begin.

$("#start").on("click", function(){ //once "start" is clicked, 

$("p").empty(); //empties the child of the p tag
$("#start").remove(); //removes the parent and child of button

timerStart();
displayQuestions();

});

function timerStart() { //timer countdown decrements by 1 unit per second,
   timer = allowedTime;
   clearInterval(countdown);
   countdown = setInterval(timerCountdown, 1000);
   timerCountdown();

}

function timerCountdown() { 

    //display timer
    timer--;

    if (timer === 0) {
        clearInterval(countdown);
    }

    displayTimer.html("Time left: " + timer);

}


function displayQuestions() { // loops through all objects in questionObjs

    //set up an object with questions and the corresponding answers, and display a question at a time.
    //set up a variable with the index 
    //if question is answered, display answer
    //move onto next question after alotted time.
    // increment index so it chooses the next question in object array

    questionObjs = [{
    q: "What is the only U.S. state that borders another state?",
    correct: "b",
    answers: {
        a: "A: Rhode Island",
        b: "B: Maine", //Maine only shares a border with New Hampshire
        c: "C: Washington",
        d: "D: Florida"
    }
       
}, {
    q: "Name the number that is three more than one-fifth of one-tenth of one-half of 5,000",
    correct: "c",
    answers: {
        a: "A: " + 503,
        b: "B: " + 103,
        c: "C: " + 53, //working backwards leads to 53
        d: "D: " + 108
    }
}, {
    q: "1, 1, 2, 3, 5, 8, 13, _, 34: What's the missing number?",
    correct: "b",
    answers: {
        a: "A: " + 20,
        b: "B: " + 21, //answer
        c: "C: " + 25,
        d: "D: " + 17
    }
}, {
    q: "What's the oldest continuously inhabited city in the world?",
    correct: "d",
    answers: {
        a: "A: Istanbul, Turky",
        b: "B: Athens, Greece",
        c: "C: Jerusalem",
        d: "D: Damascus, Syria" //answer
    }
}, {
    q: "Which of these cars did James Bond not drive in any of the James Bond films?",
    correct: "c",
    answers: {
        a: "A: Bentley",
        b: "B: Toyota",
        c: "C: Acura", //answer
        d: "D: Mercury"
    }
}];

var i = 0;

displayQuestion(questionObjs[i], answerClickHandler);
    // wait for the next question

    // if (displayTimer === 0) { //if timer hits 0, You're wrong!
    
    // // display the correct result
    // //"Ran out of time! The correct answer is "
    // // after 15s, move onto next question

    // question.hide();
    // answer.hide();
    // displayTimer.hide();

    // unanswered++;
    // pTag.append("Ran out of time! The correct answer is " + questionObjs[i].correct);
    // console.log("wrong: " + wrong);
    
    // }

    function answerClickHandler() {
        console.log(this.id);
        clearQuestion();
        if (this.id === questionObjs[i].correct) { //if the button clicked has a value, you're right!
            //display the correct result
            //"Correct!"
            //after 15s, move onto next question
            correct++;

            pTag.append("You're correct!");
            console.log("right: " + correct);

        // } else if (displayTimer === 0) {
        //     // display the correct result
        //     // //"Ran out of time! The correct answer is "
        //     // // after 15s, move onto next question

        //     unanswered++;
        //     question.hide();
        //     answer.hide();
        //     displayTimer.hide();
        
        //     pTag.append("Ran out of time! The correct answer is " + questionObjs[i].correct);
        //     answerReveal(); 
        //     console.log("unanswered: " + unanswered);
            
        } else {
            wrong++;
            pTag.append("Oops! The correct answer is " + questionObjs[i].correct);
            //answerReveal();
            console.log("wrong: " + wrong);
        
        }
        setTimeout(function(){
            i++;
            pTag.empty();
            if (i >= questionObjs.length) {
                pTag.append("This is how you did...<br>Correct: " + correct + "<br>Incorrect: " + wrong + "<br>Unanswered: " + unanswered);
                pTag.append($('<br><br><button type="button" class="btn btn-info" id="tryAgain">' + "Try again?" + '</button><br>'));
                
                tryAgain();
            } else {
                displayQuestion(questionObjs[i], answerClickHandler);
            }
        }, 1000);
    }
    
}

function displayQuestion(questionObj, clickHdlr) {
    timerStart();
    displayTimer.show();
    questionHTML.html(questionObj.q); //successfully displays question on screen

    for (var questionLetter in questionObj.answers) { //for loop to create a button for every answer
        var answerText = questionObj.answers[questionLetter];
        btn = $('<br><br><button type="button" class="btn btn-info answerBtn" id="' + questionLetter + '">' + answerText + '</button><br>');
        
        btn.on("click", clickHdlr);
        answerHTML.append(btn);
    }
    console.log(answerHTML);   
}

function clearQuestion() {
    questionHTML.empty();
    answerHTML.empty();
    displayTimer.hide();
}

function tryAgain() {
    timerStart();
    displayQuestions();

}


});
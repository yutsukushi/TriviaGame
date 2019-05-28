// GLOBAL VARIABLES

var allowedTime = 5;

var timer = allowedTime;
var countdown;
var nextQTimer;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var i = 0;

var pTag = $("p");
var questionHTML = $(".question");
var answerHTML = $(".answers");
var displayTimer = $(".displayTimer");

//-----------------------------------------------------------------------

$(document).ready(function() { //once page is fully loaded, then the game is ready to begin.

$("#start").on("click", function(){ //once "start" is clicked, 

$("p").empty(); //empties the child of the p tag
$("#start").remove(); //removes the parent and child of button

timerStart(); //calls timerStart function
displayQuestions(); //calls displayQuestions function

});

function timerStart() { //timer countdown decrements by 1 unit per second,
   timer = allowedTime;
   clearInterval(countdown);
   countdown = setInterval(timerCountdown, 1000);
   timerCountdown();

}

function timerCountdown() { 

    timer--; //timer decrements from 30seconds

    if (timer === 0) { //if timer hits 0,

        clearInterval(countdown); //stop counter at 0

        unanswered++; //increments unanswered counter by 1

        clearQuestion(); //calls clearQuestion function to empty the HTML tags

        pTag.append("You ran out of time! The correct answer is " + questionObjs[i].correct); //displays that you ran out of time, and displays correct answer

        //needs to be connected to a setTimeOut to move onto the next question.
            
        console.log("Unanswered: " + unanswered);
    }

    displayTimer.html("Time left: " + timer); //displays the timer countdown on displayTimer div tag

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

displayQuestion(questionObjs[i], answerClickHandler);
    // wait for the next question

    function answerClickHandler() {
        console.log(this.id);
        clearQuestion();
        if (this.id === questionObjs[i].correct) { //if the button clicked has a value, you're right!
            
            correct++; //increments 1, to the correct counter

            pTag.append("You're correct!"); //"Correct!"
            
            console.log("right: " + correct);
            
        } else {

            wrong++; //incremenets 1, to the wrong counter

            pTag.append("Oops! The correct answer is " + questionObjs[i].correct); //display the correct result
            
            console.log("wrong: " + wrong);
        
        }

        setTimeout(function(){

            i++; //increments index by 1

            if (i >= questionObjs.length) { //if index is greater than or equal to the length of the question object,

                var endResults = $(".endResults");
                var tryAgainBtn = $('<br><br><button type="button" class="btn btn-info" id="tryAgain">' + "Try again?" + '</button><br>'); //try again button

                endResults.append("This is how you did...<br>Correct: " + correct + "<br>Incorrect: " + wrong + "<br>Unanswered: " + unanswered); //then display the results of the trivia questions
                endResults.append('<br><br><a href="https://www.rd.com/culture/trivia-questions/">https://www.rd.com/culture/trivia-questions/</a>'); //and display the link to the actual article where I got the questions from

                tryAgainBtn.on("click", function() { //when the user clicks the "try again" button

                    tryAgainBtn.empty(); //get rid of the button
                    endResults.empty(); //get rid of the results

                    tryAgain(); //reset the counters, timer, and show the questions

                })

                endResults.append(tryAgainBtn); //display the "try again" button to the end results div tag
            
            } else { //if index isn't greater than the object length, 

                displayQuestion(questionObjs[i], answerClickHandler); //then continue to display the next question and the right answer page

            }
            
            pTag.empty(); //empty p tag for an empty p section
            
        }, 1000); //time out to apply the changes

    }
    
}

function displayQuestion(questionObj, clickHdlr) { //displays question with corresponding answer buttons

    timerStart(); //starts timer
    displayTimer.show(); //displays timer on display timer div tag
    questionHTML.html(questionObj.q); //successfully displays question on screen

    for (var questionLetter in questionObj.answers) { //for each loop to create a button for every answer specifically in the object answers

        var answerText = questionObj.answers[questionLetter]; //holds the letter value for every answer displayed

        var btn = $('<br><br><button type="button" class="btn btn-info answerBtn" id="' + questionLetter + '">' + answerText + '</button><br>'); // gives unique letter ID for the if conditional on finding the right answer
        
        btn.on("click", clickHdlr); //on click function for btn
        answerHTML.append(btn); //displays btn to the "answers" div tag

    }

    console.log(answerHTML);   
}

function clearQuestion() { //clears html tags of content

    questionHTML.empty(); //empties question from  HTML tag
    answerHTML.empty(); //empties answer from HTML tag
    displayTimer.hide(); //hides display timer
}

function tryAgain() { //resets counters

    correct = 0; 
    wrong = 0;
    unanswered = 0;

    displayTimer.show(); //shows timer on HTML again
    timerStart(); //starts timer
    displayQuestions(); //displays questions
}

});
// GLOBAL VARIABLES

var timer = 30;
var countdown;
var nextQTimer;
var correct = 0;
var wrong = 0;
var unanswered = 0;

var pTag = $("p");
var btn = $("button");
var question = $(".question");

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


function displayQuestions() {

    //set up an object with questions and the corresponding answers, and display a question at a time.
    //set up a variable with the index 
    //if question is answered, display answer
    //move onto next question after alotted time.
    // increment index so it chooses the next question in object array

    i = 0;

    questionObj = [{
    q: "What is the only U.S. state that borders another state?",
    correct: "B: Maine",
    answers: {
        a: "A: Rhode Island",
        b: "B: Maine", //Maine only shares a border with New Hampshire
        c: "C: Washington",
        d: "D: Florida"
    }
       
}, {
    q: "Name the number that is three more than one-fifth of one-tenth of one-half of 5,000",
    answers: {
        a: "A: " + 503,
        b: "B: " + 103,
        c: "C: " + 53, //working backwards leads to 53
        d: "D: " + 108
    }
}, {
    q: "1, 1, 2, 3, 5, 8, 13, _, 34: What's the missing number?",
    answers: {
        a: "A: " + 20,
        b: "B: " + 21, //answer
        c: "C: " + 25,
        d: "D: " + 17
    }
}, {
    q: "What's the oldest continuously inhabited city in the world?",
    answers: {
        a: "A: Istanbul, Turky",
        b: "B: Athens, Greece",
        c: "C: Jerusalem",
        d: "D: Damascus, Syria" //answer
    }
}, {
    q: "Which of these cars did James Bond not drive in any of the James Bond films?",
    answers: {
        a: "A: Bentley",
        b: "B: Toyota",
        c: "C: Acura", //answer
        d: "D: Mercury"
    }
}];

    question.html(questionObj[i].q); //successfully displays question on screen
    
    var answerArr = (Object.values(questionObj[i].answers)); //returns object values into an array

    for (var i = 0; i < answerArr.length; i++) { //for loop to create a button for every answer
        
        btnCreate = $('<br><br><button type="button" class="btn btn-info answerBtn">' + answerArr[i] + '</button><br>');
        
        // btnCreate.appendTo(pTag); 
        pTag.append(btnCreate);
    }

    var answer = $(".answerBtn");

    console.log(btnCreate === questionObj[i].correct);

    pTag.on("click", ".answerBtn", function(){ //delegated functions specifically for anwer buttons when they are created.

        if (btnCreate === questionObj[i].correct) { //if the button clicked has a value, you're right!
    
        //display the correct result
        //"Correct!"
        //after 15s, move onto next question

        correct++;
        question.hide();
        answer.hide();
        displayTimer.hide();

        pTag.append("You're correct!");
        answerReveal(); 
        console.log("right: " + correct);

        } else if (displayTimer === 0) {
            // display the correct result
            // //"Ran out of time! The correct answer is "
            // // after 15s, move onto next question

            unanswered++;
            question.hide();
            answer.hide();
            displayTimer.hide();
        
            pTag.append("Ran out of time! The correct answer is " + questionObj[i].correct);
            answerReveal(); 
            console.log("unanswered: " + unanswered);
            
        } else {

            wrong++;
            question.hide();
            answer.hide();
            displayTimer.hide();

            pTag.append("Oops! The correct answer is " + questionObj[i].correct);
            answerReveal();
            console.log("wrong: " + wrong);
        
        }
        
        console.log("it worked");
        
    });

    // if (displayTimer === 0) { //if timer hits 0, You're wrong!
    
    // // display the correct result
    // //"Ran out of time! The correct answer is "
    // // after 15s, move onto next question

    // question.hide();
    // answer.hide();
    // displayTimer.hide();

    // unanswered++;
    // pTag.append("Ran out of time! The correct answer is " + questionObj[i].correct);
    // console.log("wrong: " + wrong);
    
    // }
    
};

function answerReveal() {
 nextQTimer = setTimeout(nextQuestion, 1000 * 10); //after 10s, display next question and answers
}

function nextQuestion() { //display next question and answers
    // i++ for the next question
    // question.show(questionObj[i].q)

}

function displayResults() {
//when questions are all answered
// # of questions answered correctly, from displayFourAnswers
// # of questions answered wrong, from displayFourAnswers
// display start over button
}

function startOver() {
// when clicked remove contents of page
// displayQuestions() function

}


});

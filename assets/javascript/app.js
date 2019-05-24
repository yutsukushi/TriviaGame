// GLOBAL VARIABLES

var displayTimer = 30;
var countdown;
var correct = 0;
var wrong = 0;

var pTag = $("p");
var btn = $("button");

//-----------------------------------------------------------------------

$(document).ready(function() {

$(".answer").hide();

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

function timerCountdown() { //

    //display timer
    displayTimer--;

    if (displayTimer === 0) {
        clearInterval(countdown);
    }

    $(".displayTimer").html("Time left: " + displayTimer);
    console.log(displayTimer);

}


function displayQuestions() {

    //set up an object with questions and the corresponding answers, and display a question at a time.
    //set up a variable with the index 
    //if question is answered, display answer
    //move onto next question after alotted time.
    // increment index so it chooses the next question in object array

    var i = 0;

    var questionObj = [{
        q: "What is the only U.S. state that borders another state?",
        answers: {
            a : "A: Rhode Island",
            b : "B: Maine", //Maine only shares a border with New Hampshire
            c : "C: Washington",
            d : "D: Florida"
        }
    }, {
        q: "Name the number that is three more than one-fifth of one-tenth of one-half of 5,000",
        answers: {
            a: 503,
            b: 103,
            c: 53, //working backwards leads to 53
            d: 108
        }
    }, {
        q: "1, 1, 2, 3, 5, 8, 13, _, 34: What's the missing number?",
        answers: {
            a: 20,
            b: 21, //answer
            c: 25,
            d: 17
        }
    }, {
        q: "What's the oldest continuously inhabited city in the world?",
        answers: {
            a: "Istanbul, Turky",
            b: "Athens, Greece",
            c: "Jerusalem",
            d: "Damascus, Syria" //answer
        }
    }, {
        q: "Which of these cars did James Bond not drive in any of the James Bond films?",
        answers: {
            a: "Bentley",
            b: "Toyota",
            c: "Acura", //answer
            d: "Mercury"
        }
    }];

   
    
    pTag.append(questionObj[i].q); //successfully displays question on screen
    
    var answerArr = (Object.values(questionObj[i].answers)); //returns object values into an array

    for (var i = 0; i < answerArr.length; i++) { //for loop to create a button for every answer
        
        var btnCreate = $('<br><br><button type="button" class="btn btn-info">' + answerArr[i] + '</button><br>');
        
        btnCreate.appendTo(pTag); 
    
    }

    console.log(answerArr.length);

    displayAnswerBtns();
};


function displayAnswerBtns() {
    // displays all 4 answers as buttons

    // var btn = $("button");

    // for (var i = 0; i < answers.length; i++) {
    //     btn.append(answerArr[i]);
    // }
    // when user clicks on a button, count user's wrong/correct answers
    // var correct = 0; increment++; 
    // var wrong = 0; increment++;

}

function ifCorrectAnswerClicked() {
//display the correct result
//"Correct!"
//after 15s, move onto next question

}

function ifWrongAnswerClicked() {
    // display the correct result
    //"Incorrect: the answer is _____"
    // after 15s, move onto next question

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

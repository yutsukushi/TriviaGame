// GLOBAL VARIABLES


//-----------------------------------------------------------------------

$(document).ready(function() {


$("#start").on("click", function(){

$("p").empty(); //empties the child of the p tag
$("button").remove(); //removes the parent and child of button
displayQuestions();

});

// function timerCountdown() {

//     setTimeout(displayQuestion, 1000 * 30);
//     setTimeout(displayFourAnswers, 1000 * 30);

//     //display timer
//     var displayTimer = 30;


// }

function displayQuestions() {

    //set up an object with questions and the corresponding answers, and display a question at a time.
    //set up a variable with the index 
    //if question is answered, display answer
    //move onto next question after alotted time.

    var i = 0;

    var questionObj = [{
        q1: "What is the only U.S. state that only borders another state?"
        // answers: {
        //     a: "Rhode Island",
        //     b: "Maine", //Maine only shares a border with New Hampshire
        //     c: "Washington",
        //     d: "Florida"
        // },
    }, {
        q2: "Name the number that is three more than one-fifth of one-tenth of one-half of 5,000"
        // answers: {
        //     a: 503,
        //     b: 103,
        //     c: 53, //working backwards leads to 53
        //     d: 108
        // }

    }, {
        q3: "1, 1, 2, 3, 5, 8, 13, _, 34: What's the missing number?"
        // answers: {
        //     a: 20,
        //     b: 21,
        //     c: 25,
        //     d: 17
        // }
    }, {
        q4: "What's the oldest continuously inhabited city in the world?"
        // answers: {
        //     a: Istanbul, Turky,
        //     b: Athens, Greece,
        //     c: Jerusalem,
        //     d: Damascus, Syria
        // }
    }, {
        q5: "Which of these cars did James Bond not drive in any of the James Bond films?"
        // answers: {
        //     a: Bentley,
        //     b: Toyota,
        //     c: Acura,
        //     d: Mercury
        // }
    }];

    // var chosenQuestion = Math.floor(Math.random() * 5);
    // console.log(chosenQuestion);
    // console.log(questionObj[chosenQuestion]);
    console.log(questionObj[i]);

    $("<p>").html(questionObj[i]);

    
};


function displayFourAnswers() {

}

function ifCorrectAnswerClicked() {

}

function ifWrongAnswerClicked() {

}

function displayResults() {

}

function startOver() {

}


});

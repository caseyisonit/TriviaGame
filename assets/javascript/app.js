//===Global Variables===/
// object array for the questions, answersArray (options), correct answer, image/gif
var questionArray = [
    {
        question: "Which queen is famous for the catchphrase 'absolutely.'",
        answers: [
            { answer: 'Gia Gunn', value: true },
            { answer: 'Vivacious', value: false },
            { answer: 'Jade Jolie', value: false },
            { answer: 'Adore Delano', value: false }
        ],
        image: "https://media.giphy.com/media/26gs7ff1HFaA7KOUE/source.gif"
    },
    {
        question: "Which queen is famous for the catchphrase 'absolutely.'",
        answers: [
            { answer: 'Gia Gunn', value: true },
            { answer: 'Vivacious', value: false },
            { answer: 'Jade Jolie', value: false },
            { answer: 'Adore Delano', value: false }
        ],
    }
];
// console.log(questionArray[0]);
var correctcounter = correct++;
var wrongcounter = wrong++;
var correct = 0;
var wrong = 0;

var timer = $("#timer");
var questionDiv = $("#question");
var answersDiv = $("#answers");
var buttonText = $(".button")

//===Function===/
$(document).ready(function () {
    //Global functions
    //Function to print question and answers
    function createQuestion() {
        for (var i = 0; i < questionArray.length; i++) {
            $(questionDiv).text(questionArray[i].question);

            //for loop to print the answers
            for (var j = 0; j < questionArray[i].answers.length; j++){
                $(answersDiv).html("<div class='button'>" + questionArray[i].answers[j].answer + "</div>");

                console.log("this is: " + $(this))
            } 
        };
    };
    createQuestion(questionArray);

    //startgame
    //question timer
    // answer timer
    // for loop to run through the array 
    //onclick event for single selection
    //if/then
    //empty/reset function

});

//===Callbacks===/


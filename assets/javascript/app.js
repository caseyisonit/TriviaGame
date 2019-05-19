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
console.log("this is correct image gif: " + questionArray[0].image);
var correctCounter = 0;
var wrongCounter = 0;
var correct = 0;
var wrong = 0;
var timer = 16;
var counter = 0;
var clock;
var intervalId;

var timerDiv = $("#timer");
var questionDiv = $("#question");
var answersDiv = $("#answers");
var buttonText = $(".button");



//===Function===/
$(document).ready(function () {
    //on click functions
    $('body').on('click', '#start.button', function (event) {
        event.preventDefault();
        startGame();
        // $('.answers').css('visibility', 'visible');
    });

    $('body').on('click', '.answer', function (event) {
        console.log($(this));
        chosenAnswer = $(this).text();
        var answerCounter = questionArray[counter].answers;

        var answer = $('.answer');
        for (var i = 0; i < answerCounter.length; i++) {
            if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
                clearInterval(clock);
                var right = $(this).attr('class', 'right-answer answer');
                rightAnswer();
            } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
                clearInterval(clock);
                $(this).attr('class', 'wrong-answer answer');
                $('.first-answer').css('background-color', 'green');
                $('.first-answer').css('color', 'white');
                wrongAnswer();
            }
        }
    });

    $('body').on('click', '.reset-button', function (event) {
        event.preventDefault();
        resetGame();
    });
    //Function to print question and answers
    function startGame() {
        // for loop to print question and answers
        for (var i = 0; i < questionArray.length; i++) {
            var question = questionArray[counter].question;
            questionDiv.text(question);
            
            answersDiv.empty();
            
            function createAnswers() {
                for (var k = 0; k < questionArray[i].answers.length; k++) {
                    var answers = questionArray[i].answers[k];
                    answersDiv.append("<div class='answer'>" + answers.answer + "</div>");
                };
            };
            createAnswers();
        };
        timerHolder();
    };
    
    function rightAnswer() {
        correctCounter++;
        $('#time').html('<p>Right answers: ' + correctCounter + '</p><br>');
        setTimeout(questionCounter, 2000)
    };
    
    function wrongAnswer() {
        wrongCounter++;
        $('#time').html('<p>Wrong answers: ' + wrongCounter + '</p>');
        setTimeout(questionCounter, 2000);
    }
    
    function questionCounter() {
        if (counter < 6) {
            counter++;
            startGame();
            timer = 16;
            timerHolder();
        } else {
            finishGame();
        }
    }
    
    // Timer function
    function timerHolder() {
        clearInterval(clock);
        clock = setInterval(seconds, 1000);
        function seconds() {
            if (timer === 0) {
                clearInterval(clock);
                wrongAnswer();
            } else if (timer > 0) {
                timer--;
            }
            $('#time').text(timer);
        }
    }
    
    // Finishing the game
    function finishGame() {
        var final = $('.main')
        .html("<p>All done, here's how you did!<p><br><br>")
        .append('<p>Correct Answers: ' + correctCounter + '</p><br>')
        .append('<p>Wrong Answers: ' + wrongCounter + '</p>');
        $(final).attr('<div>');
        $(final).attr('class', 'final');
        $('.final').append('<p><a class="btn btn-primary btn-lg reset-button" href="#">Shantay Play Again</a></p>');
    }
    
    // Reset the game
    function resetGame() {
        counter = 0;
        correctCounter = 0;
        wrongCounter = 0;
        timer = 15;
        startGame();
        timerHolder();
    }
});
    
    

    //function for incorrect answer diplay

    //startgame
    //question timer
    // answer timer
    // for loop to run through the array 
    //onclick event for single selection
    //if/then
    //empty/reset function


//===Callbacks===/


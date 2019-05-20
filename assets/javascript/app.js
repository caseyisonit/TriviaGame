//===Global Variables===/
// object array for the questions, answersArray (options), correct answer, image/gif
var questionArray = [
    {
        question: "Which queen is famous for the catchphrase 'absolutely'?",
        answers: [
            { answer: 'Gia Gunn', value: true },
            { answer: 'Vivacious', value: false },
            { answer: 'Jade Jolie', value: false },
            { answer: 'Adore Delano', value: false }
        ],
        image: "https://media.giphy.com/media/26gs7ff1HFaA7KOUE/source.gif"
    },
    {
        question: "Who told Sharon Needles to 'go back to Party City where you belong'?",
        answers: [
            { answer: 'Willam', value: false },
            { answer: 'Jiggly Caliente', value: false },
            { answer: "Phi Phi O'Hara", value: true },
            { answer: 'Chad Michaels', value: false }
        ],
    },
    {
        question: "Which queen is the first to enter the workroom in Season 7??",
        answers: [
            { answer: 'Violet Chachki', value: false },
            { answer: 'Miss Fame', value: true },
            { answer: 'Ginger Minj', value: false },
            { answer: 'Jaidynn Dior Fierce', value: false }
        ],
    },
    {
        question: "Who was the first contestant to compete on four separate series of Drag Race?",
        answers: [
            { answer: 'Latrice Royale', value: false },
            { answer: 'Trixie Mattel', value: false },
            { answer: 'Manila Luzon', value: false },
            { answer: 'Shangela', value: true }
        ],
    },
    {
        question: "Which pair of queens fall victim to the first ever double elimination??",
        answers: [
            { answer: 'Honey Mahogany and Vivienne Pinay', value: true },
            { answer: 'Laila McQueen and Dax ExclamationPoint', value: false },
            { answer: 'Valentina and Nina Bonina Brown', value: true },
            { answer: 'Vivacious and Magnolia Crawford', value: false }
        ],
    },
    {
        question: "Which queen physically picked someone up during their lip sync?",
        answers: [
            { answer: 'India Ferrah', value: false },
            { answer: 'Phoenix', value: false },
            { answer: 'Mimi Imfirst', value: true },
            { answer: 'Delta Work', value: false }
        ],
    },
    {
        question: "Which word did Adore Delano like to constantly repeat?",
        answers: [
            { answer: 'Absolutely', value: false },
            { answer: 'Party', value: true },
            { answer: 'Totally', value: false },
            { answer: 'Bam', value: false }
        ],
    },
    {
        question: "Which challenge did RuPaul describe as the worst ever?",
        answers: [
            { answer: "Ruco's Empire", value: false },
            { answer: 'The Last Ball on Earth', value: false },
            { answer: 'Pharmarusical', value: false },
            { answer: 'Shakesqueer', value: true }
        ],
    },
    {
        question: "Season 6 filmed a secret joint crowning between...",
        answers: [
            { answer: 'Bianca Del Rio and Adore Delano', value: true },
            { answer: 'Adore Delano and Courtney Act', value: false },
            { answer: 'Courtney Act and Bianca Del Rio', value: false },
            { answer: 'Darienne Lake and Bianca Del Rio', value: false }
        ],
    },
    {
        question: "Who told Sharon Needles to 'go back to Party City where you belong'?",
        answers: [
            { answer: 'Bin liners', value: false },
            { answer: 'Shower curtains', value: false },
            { answer: 'Sponges', value: true },
            { answer: 'Forks', value: false }
        ],
    },
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
    });

    $('body').on('click', '.answer', function (event) {
        // console.log($(this));
        chosenAnswer = $(this).text();
        var answerCounter = questionArray[counter].answers;

        var answer = $('.answer');
        for (var i = 0; i < answerCounter.length; i++) {
            if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
                clearInterval(clock);
                $(this).attr('class', 'right-answer answer');
                rightAnswer();
            } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
                clearInterval(clock);
                $(this).attr('class', 'wrong-answer answer');
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
            var questionText = questionArray[counter].question;
            questionDiv.text(questionText);

            answersDiv.empty();
            //cant get the for loop to work for this section
            answersDiv.append("<div class='answer' id='choice1'>" + questionArray[counter].answers[0].answer + "</div>");
            $('#choice1').attr('value', questionArray[i].answers[0].value);
            answersDiv.append("<div class='answer' id='choice2'>" + questionArray[counter].answers[1].answer + "</div>");
            $('#choice2').attr('value', questionArray[i].answers[1].value);
            answersDiv.append("<div class='answer' id='choice3'>" + questionArray[counter].answers[2].answer + "</div>");
            $('#choice3').attr('value', questionArray[i].answers[2].value);
            answersDiv.append("<div class='answer' id='choice4'>" + questionArray[counter].answers[3].answer + "</div>");
            $('#choice4').attr('value', questionArray[i].answers[3].value);
        };
        timerHolder();
    };
    console.log("This is question: " + question);

    function rightAnswer() {
        correctCounter++;
        timerDiv.text('Right answers: ' + correctCounter);
        questionDiv.text('WAY TO GO!');
        answersDiv.html('<img src="' + questionArray[counter].image + '"/>');
        setTimeout(questionCounter, 4000);
    };
console.log(questionArray[counter].image)
    function wrongAnswer() {
        wrongCounter++;
        $('#time').html('<p>Wrong answers: ' + wrongCounter + '</p>');
        $('#question').text('YOU DONE MESSED UP KITTY GRRRRL!');
        answersDiv.html('<img src="' + questionArray[counter].image + '"/>');
        setTimeout(questionCounter, 4000);
    }

    function questionCounter() {
        if (counter < 10) {
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


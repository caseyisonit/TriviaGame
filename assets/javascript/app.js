$(document).ready(function reload() {
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
        image: "assets/images/absolutely.gif"
    },
    {
        question: "Who told Sharon Needles to 'go back to Party City where you belong'?",
        answers: [
            { answer: 'Willam', value: false },
            { answer: 'Jiggly Caliente', value: false },
            { answer: "Phi Phi O'Hara", value: true },
            { answer: 'Chad Michaels', value: false }
        ],
        image: "assets/images/partycity.gif"
    },
    {
        question: "Which queen is the first to enter the workroom in Season 7??",
        answers: [
            { answer: 'Violet Chachki', value: false },
            { answer: 'Miss Fame', value: true },
            { answer: 'Ginger Minj', value: false },
            { answer: 'Jaidynn Dior Fierce', value: false }
        ],
        image: "assets/images/missfame.gif"
    },
    {
        question: "Who was the first contestant to compete on four separate series of Drag Race?",
        answers: [
            { answer: 'Latrice Royale', value: false },
            { answer: 'Trixie Mattel', value: false },
            { answer: 'Manila Luzon', value: false },
            { answer: 'Shangela', value: true }
        ],
        image: "assets/images/shangela.gif"
    },
    {
        question: "Which pair of queens fall victim to the first ever double elimination?",
        answers: [
            { answer: 'Honey Mahogany and Vivienne Pinay', value: true },
            { answer: 'Laila McQueen and Dax ExclamationPoint', value: false },
            { answer: 'Valentina and Nina Bonina Brown', value: false },
            { answer: 'Vivacious and Magnolia Crawford', value: false }
        ],
        image: "assets/images/honey.gif"
    },
    {
        question: "Which queen physically picked someone up during their lip sync?",
        answers: [
            { answer: 'India Ferrah', value: false },
            { answer: 'Phoenix', value: false },
            { answer: 'Mimi Imfirst', value: true },
            { answer: 'Delta Work', value: false }
        ],
        image: "assets/images/mimi.gif"
    },
    {
        question: "Which word did Adore Delano like to constantly repeat?",
        answers: [
            { answer: 'Absolutely', value: false },
            { answer: 'Party', value: true },
            { answer: 'Totally', value: false },
            { answer: 'Bam', value: false }
        ],
        image: "assets/images/party.gif"
    },
    {
        question: "Which challenge did RuPaul describe as the worst ever?",
        answers: [
            { answer: "Ruco's Empire", value: false },
            { answer: 'The Last Ball on Earth', value: false },
            { answer: 'Pharmarusical', value: false },
            { answer: 'Shakesqueer', value: true }
        ],
        image: "assets/images/shakesqueer.gif"
    },
    {
        question: "Season 6 filmed a secret joint crowning between...",
        answers: [
            { answer: 'Bianca Del Rio and Adore Delano', value: true },
            { answer: 'Adore Delano and Courtney Act', value: false },
            { answer: 'Courtney Act and Bianca Del Rio', value: false },
            { answer: 'Darienne Lake and Bianca Del Rio', value: false }
        ],
        image: "assets/images/biancaadore.gif"
    },
    {
        question: "Which household item did Monet X Change turn into a dress?",
        answers: [
            { answer: 'Bin liners', value: false },
            { answer: 'Shower curtains', value: false },
            { answer: 'Sponges', value: true },
            { answer: 'Forks', value: false }
        ],
        image: "assets/images/sponge.gif"
    }
];

var correctCounter = 0;
var wrongCounter = 0;
var correct = 0;
var wrong = 0;
var timer = 11;
var counter = 0;
var clock;
var intervalId;

var timerDiv = $("#time");
var questionDiv = $("#question");
var answersDiv = $("#answers");
var buttonText = $(".button");



//===Function===/
    //on click functions
    $('body').on('click', '#start.button', function (event) {
        event.preventDefault();
        startGame();
    });

    $('body').on('click', '.answer', function (event) {

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
        timerHolder();
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
    };
    console.log("This is question: " + question);

    function rightAnswer() {
        timerDiv.text("YOU'RE A WINNER BABY!");
        correctCounter++;
        questionDiv.text('Right answers: ' + correctCounter);
        answersDiv.html('<img src="' + questionArray[counter].image + '"/>');
        counter++;
        setTimeout(questionCounter, 2000);
    };

    function wrongAnswer() {
        timerDiv.text('YOU DONE MESSED UP KITTY GRRRRL!');
        wrongCounter++;
        questionDiv.text('Wrong answers: ' + wrongCounter);
        answersDiv.html('<img src="' + questionArray[counter].image + '"/>');
        counter++;
        setTimeout(questionCounter, 2000);
    }
    
    //set the limit of the game
    function questionCounter() {
        if (counter < 10) {
            startGame();
            timer = 11;
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
                wrongAnswer();
                // clearInterval(clock);
            } else if (timer > 0) {
                timer--;
            }
            timerDiv.text(timer);
        }
    }

    // Finishing the game
    function finishGame() {
        timerDiv.text('ConDRAGulations!');
        questionDiv.empty();
        questionDiv.text('Right answers: ' + correctCounter + '   |   Wrong answers: ' + wrongCounter);
        answersDiv.empty();
        answersDiv.html('<div class="answer reset-button"> Shantay Play Again</div>');
    }

    // Reset the game
    function resetGame() {
        counter = 0;
        correctCounter = 0;
        wrongCounter = 0;
        timer = 11;
        reload();
        timerHolder();
    }
});


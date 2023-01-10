// Declare Global Variables

var startBtn = document.getElementById("startBtn")
var time = 75;
var time_left = true;
var time_start = false;
var countdownTimer = document.getElementById("countdownTimer");
var mainContainer = document.getElementById("mainContainer");
var testContainer = document.getElementById("testContainer");
var questionEl = document.getElementById("questionEl");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var correctAnswer = document.getElementById("correctAnswer");
var submitBtn = document.getElementById("submit")
var leaderBtn = document.getElementById("leaderview")
var retryBtn = document.getElementById("go_back")
var clearBtn = document.getElementById("clear_board")
var leaderboard = [];
var output = "";
var score = 0;
let i = 0;

// tried to use an array containing all 4 answers to simply, but didn't work
/* var answerArray = [answerA, answerB, answerC, answerD] */

// Set Questions

var questionList = [
    {
        question: "Commonly used data types do NOT include:",
        answer: ["A) strings", "B) booleans", "C) alerts", "D) numbers"],
        correctAnswer: 1
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answer: ["A) quotes", "B) curly brackets", "C) parentheses", "D) square brackets"],
        correctAnswer: 2
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answer: ["A) numbers and strings", "B) other arrays", "C) booleans", "D) all of the above"],
        correctAnswer: 3
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: ["A) commas", "B) curly brackets", "C) quotes", "D) parantheses"],
        correctAnswer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["A) Javascript", "B) terminal/Bash", "C) for loops", "D) console log"],
        correctAnswer: 3
}];

// Create Countdown Timer Function

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
    if (time_start)
    time--;
    if (time<= 0) {
        end_quiz();
        time = 0;
    }
    document.getElementById("timer").innerHTML = time;
}

// Create Questions Function

function setTestQuestions() {
    questionEl.textContent = questionList[i].question;
    answerA.textContent = questionList[i].answer[0];
    answerB.textContent = questionList[i].answer[1];
    answerC.textContent = questionList[i].answer[2];
    answerD.textContent = questionList[i].answer[3];
};

// Create Start Button Event Listener

startBtn.addEventListener("click", function() {
    testContainer.setAttribute("style", "display:block");
    mainContainer.setAttribute("style", "display:none");
    countdownTimer.setAttribute("style", "display:block");
    document.getElementById("referee").setAttribute("style", "display:block");
    document.getElementById("score").innerHTML = score;
    // Countdown Function Previously Defined
    setCountdownTimer();
    // Questions Function Previously Defined
    setTestQuestions();
    time_start = true;
});

// Tried to do one general event listener to listen for all 4 buttons, didn't work

// Check whether answer is correct on answer selection

answerA.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionList[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // if Answer A (0 on the array) is correct, run the following
    if (0 === correctAnswer) {
        document.getElementById("UserAnswer").innerHTML = "That's right! Well done.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    // if Answer A (0 on the array) is incorrect, run the following
    } else {
        // penalize time
        time -= 10;
        document.getElementById("UserAnswer").innerHTML = "That ain't it, keep trying.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
    }
    // if no more questions, end quiz
    if (i >= questionList.length -1) {
        end_quiz();
    } else {
        i++
        setTestQuestions();
    };
});

answerB.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionList[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // if Answer B (1 on the array) is correct, run the following
    if (1 === correctAnswer) {
        document.getElementById("UserAnswer").innerHTML = "That's right! Well done.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    // if Answer B (1 on the array) is incorrect, run the following
    } else {
        // penalize time
        time -= 10;
        document.getElementById("UserAnswer").innerHTML = "That ain't it, keep trying.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
    }
    // if no more questions, end quiz
    if (i >= questionList.length -1) {
        end_quiz();
    } else {
        i++
        setTestQuestions();
    };
});

answerC.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionList[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // if Answer C (2 on the array) is correct, run the following
    if (2 === correctAnswer) {
        document.getElementById("UserAnswer").innerHTML = "That's right! Well done.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    // if Answer C (2 on the array) is incorrect, run the following
    } else {
        // penalize time
        time -= 10;
        document.getElementById("UserAnswer").innerHTML = "That ain't it, keep trying.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
    }
    // if no more questions, end quiz
    if (i >= questionList.length -1) {
        end_quiz();
    } else {
        i++
        setTestQuestions();
    };
});

answerD.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questionList[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // if Answer D (3 on the array) is correct, run the following
    if (3 === correctAnswer) {
        document.getElementById("UserAnswer").innerHTML = "That's right! Well done.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    // if Answer D (3 on the array) is incorrect, run the following
    } else {
        // penalize time
        time -= 10;
        document.getElementById("UserAnswer").innerHTML = "That ain't it, keep trying.";
        setTimeout(function() {
            document.getElementById("UserAnswer").innerHTML = "";
        },
        1000
        );
    }
    // if no more questions, end quiz
    if (i >= questionList.length -1) {
        end_quiz();
    } else {
        i++
        setTestQuestions();
    };
});

// Create End Quiz Function

function end_quiz(){
    document.getElementById("game_over").setAttribute("style", "display:block");
    document.getElementById("testContainer").setAttribute("style", "display:none");
    document.getElementById("countdownTimer").setAttribute("style", "display:none");
    document.getElementById("referee").setAttribute("style", "display:none");
    document.getElementById("UserAnswer").innerHTML = "";
    document.getElementById("final_score").innerHTML = score;
};

// Creating submission button as Event Listener (WORKS!)

submitBtn.addEventListener("click", function() {
    leaderboard.push(document.getElementById("initials").value + " " + score);
    /* got help in office hours to create a sorting function to properly RANK submissions to the leaderboard */
    leaderboard.sort(function(a,b) {
        /* var firstscore = a.split(" ")[a.length-1] */
        var firstscoreWords = a.split(" ");
        var firstscore = firstscoreWords[firstscoreWords.length-1]
        /* var secondscore = b.split(" ")[b.length-1] */
        var secondscoreWords = b.split(" ");
        var secondscore = secondscoreWords[secondscoreWords.length-1]
        return firstscore < secondscore ? 1 : -1
    })
    document.getElementById("mainContainer").setAttribute("style", "display:none")
    document.getElementById("testContainer").setAttribute("style", "display:none");
    document.getElementById("game_over").setAttribute("style", "display:none");
    document.getElementById("leaderboard_page").setAttribute("style", "display:block");

    output = "";
    /* got help in office hours to create LIST ITEMS for every submission to the leaderboard */
    for(let j=0; j<leaderboard.length; j++){
        output = output + "<li> " + leaderboard[j] + "</li>\n";
    }
    document.getElementById("leaderboard").innerHTML = output;
    mrClean();
});

// use JS .sort function with splits & comparison functions so that the high scores are ranked

// Creating Leaderboard View Button as Event Listener (WORKS!)

leaderBtn.addEventListener("click", function() {
    document.getElementById("mainContainer").setAttribute("style", "display:none")
    document.getElementById("testContainer").setAttribute("style", "display:none");
    document.getElementById("game_over").setAttribute("style", "display:none");
    document.getElementById("leaderboard_page").setAttribute("style", "display:block");
    document.getElementById("referee").setAttribute("style", "display:none");
    countdownTimer.setAttribute("style", "display:none");

    output = "";
    /* updated with LIST ITEM specification from submitBtn in order to keep consistent ordered/ranked leaderboard */
    for(let j=0; j<leaderboard.length; j++){
        output = output + "<li> " + leaderboard[j] + "</li>\n";
    }
    document.getElementById("leaderboard").innerHTML = output;
    mrClean();
});

// Create Retry Button as Event Listener (WORKS!)

retryBtn.addEventListener("click", function() {
    document.getElementById("leaderboard_page").setAttribute("style", "display:none");
    document.getElementById("mainContainer").setAttribute("style", "display:block");
    countdownTimer.setAttribute("style", "display:none");
    document.getElementById("referee").setAttribute("style", "display:none");
    mrClean();
});

// Create Clear Leaderboard Button as Event Listener
// (Not actually clearing Leaderboard, cleared entries reappear on revisit)

clearBtn.addEventListener("click", function() {
    document.getElementById("leaderboard").innerHTML = "";
    leaderboard = [];
    mrClean();
});

// Refresh The Page without losing high score data

function mrClean() {
    time = 75;
    time_left = true;
    time_start = false;
    i = 0;
    score = 0;
};
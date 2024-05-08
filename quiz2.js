//this would be the object shape for storing the questions
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "The text - 'The Deep History of Carbon Dioxide', explains the role of _____ in Earth's ecosystem and the dangers of disrupting its natural cycle.",
        optionA: "Oxygen (O2)",
        optionB: "Carbon dioxide (CO2)",
        optionC: "Helium (He)",
        optionD: "Nitrogen (N2)",
        correctOption: "optionB"
    },

    {
        question: "According to 'Civilization and Extinction', what is one consequence of the extinction of megafauna caused by humans?",
        optionA: "The rise of new predator species",
        optionB: "An increase in global biodiversity",
        optionC: "A disruption of ecosystems",
        optionD: "A more stable food chain",
        correctOption: "optionC"
    },

    {
        question:"'The Discovery of Climate Change' mentions a scientist who joined efforts to raise awareness about climate change in the 1980s. What is the main challenge this text describes regarding communication about climate change?",
        optionA: "Public disinterest in environmental issues",
        optionB: "Difficulty in measuring the effects of climate change",
        optionC: "The high cost of implementing solutions",
        optionD: " Conveying the urgency of the crisis effectively",
        correctOption: "optionD"
    },

    {
        question: "'Why Didn't They Act?' discusses tactics used by the fossil fuel industry to create doubt about climate science. Which of these is an example the text mentions?",
        optionA: "Funding research into renewable energy sources",
        optionB: "Cherry-picking data to downplay the risks",
        optionC: "Advocating for stricter environmental regulations",
        optionD: "Encouraging public participation in climate action",
        correctOption: "optionB"
    },

    {
        question: "Based on 'Tipping Points and Feedback Loops', what is a potential consequence of exceeding tipping points in the Earth's climate system?",
        optionA: "A slight increase in average global temperatures",
        optionB: "The emergence of new weather patterns",
        optionC: "Abrupt and irreversible changes to the climate",
        optionD: "A more efficient use of natural resources",
        correctOption: "optionC"
    },

    {
        question: "The text 'The science is as solid as it gets' mentions a concept called 'shifting baseline syndrome'. Which of the following best describes this concept?",
        optionA: "The difficulty of attributing specific weather events to climate change.",
        optionB: "The tendency for people to accept environmental degradation as normal.",
        optionC: "The increasing frequency and intensity of extreme weather events.",
        optionD: "The economic costs associated with addressing climate change.",
        correctOption: "optionB"
    },

    {
        question: "According to 'This is the biggest story in the world', Greta Thunberg believes what is essential alongside taking action to address the climate crisis?",
        optionA: "Technological advancements as the sole solution.",
        optionB: "Public awareness and education about the issue.",
        optionC: "A focus on individual actions without systemic change.",
        optionD: "Ignoring the problem and hoping it goes away.",
        correctOption: "optionA"
    },

    {
        question: "According to the readings, how do scientists monitor changes in Earth's ice sheets?",
        optionA: "By directly measuring the thickness of the ice sheets at different locations",
        optionB: "By analyzing satellite images of the ice cover",
        optionC: "By studying ice cores drilled from the glaciers",
        optionD: "By measuring changes in Earth's gravitational pull due to ice mass variations",
        correctOption: "optionA"
    },

    {
        question: "The passage from 'Why Didn't They Act?' discusses a company that knew about the climate risks of fossil fuels but downplayed them publicly. What is the name of this company (according to the text)?",
        optionA: "ExxonMobil",
        optionB: "Tesla",
        optionC: "General Motors",
        optionD: "Ford",
        correctOption: "optionA"
    },

    {
        question: "Besides reducing greenhouse gas emissions, what is another potential strategy mentioned in the readings to address climate change?",
        optionA: "Intentional capture and storage of carbon dioxide from the atmosphere",
        optionB: "Building sea walls to protect coastal areas from rising sea levels",
        optionC: "Manufacturing more electric vehicles to replace gasoline-powered cars",
        optionD: "Planting trees in areas previously devoid of forests",
        correctOption: "optionA"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions



let questionNumber = 0 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion() {
    const currentQuestion = questions[questionNumber];
    document.getElementById("question-number").innerHTML = questionNumber + 1;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = questions[questionNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");

    let selectedOption = null;
    options.forEach((option) => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });

    if (selectedOption === currentQuestionAnswer) {
        playerScore++;
    } else {
        wrongAttempt++;
    }

    questionNumber++;
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();

    if (questionNumber < questions.length) {
        NextQuestion();
    } else {
        handleEndGame();
    }

    resetOptionBackground();
}


//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
    document.getElementById('continue-button').addEventListener('click', function() {
    closeScoreModal();
    window.location.href = 'index.html';
    });

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
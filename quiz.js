//this would be the object shape for storing the questions
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "What gas plays a key role in regulating Earth's temperature but can be problematic in high concentrations?",
        optionA: "Oxygen (O2)",
        optionB: "Carbon dioxide (CO2)",
        optionC: "Helium (He)",
        optionD: "Nitrogen (N2)",
        correctOption: "optionB"
    },

    {
        question: "The Earth's climate is changing. What is one-way scientists believe human activity is affecting the climate?",
        optionA: "Launching rockets into space",
        optionB: "Burning fossil fuels like coal and oil",
        optionC: "Building skyscrapers in big cities",
        optionD: "Increasing the number of cars on the road",
        correctOption: "optionB"
    },

    {
        question: "Many countries have signed agreements to reduce greenhouse gas emissions. What are greenhouse gases?",
        optionA: "Gases that help keep heat near Earth's surface",
        optionB: "Gases that create holes in the ozone layer",
        optionC: "Gases that cause colorful sunsets",
        optionD: "Gases used in refrigerators",
        correctOption: "optionA"
    },

    {
        question: "What is the term for the gradual increase in Earth's average temperature over time?",
        optionA: "Global warming",
        optionB: "Climate shift",
        optionC: "Seasonal change",
        optionD: "Weather pattern",
        correctOption: "optionA"
    },

    {
        question: "The passage talks about 'tipping points' in the Earth's climate system. What does this term likely refer to?",
        optionA: "Points on a map with extreme weather",
        optionB: "Moments when climate change becomes irreversible",
        optionC: "Places where pollution is the worst",
        optionD: "Locations with the most endangered species",
        correctOption: "optionB"
    },

    {
        question: "True or False: Most scientists agree that climate change is happening and that human activity is a major cause.",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is an example of something we can do to reduce our impact on the environment?",
        optionA: "Using a bike or walking instead of driving",
        optionB: "Leaving the lights on in empty rooms",
        optionC: "Throwing away trash without recycling",
        optionD: "Wasting water when brushing teeth",
        correctOption: "optionA"
    },

    {
        question: "The readings mention something scientists use to measure Earth's average temperature. What tool do they use?",
        optionA: "A giant thermometer",
        optionB: "Special satellites in space",
        optionC: "Ocean buoys that collect data",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "What is an important step to take to address climate change?",
        optionA: " Learning more about the issue",
        optionB: "Ignoring the problem and hoping it goes away",
        optionC: "Blaming other countries for not doing enough",
        optionD: "Only focusing on local environmental problems",
        correctOption: "optionA"
    },

    {
        question: "There are talks about international effort to reduce greenhouse gas emissions. What is the main idea behind this effort?",
        optionA: "To completely stop using all sources of energy",
        optionB: "To track and monitor weather patterns more closely",
        optionC: "To find ways to reduce the release of heat-trapping gases",
        optionD: "To plant more trees in every country",
        correctOption: "optionC"
    },

    {
        question: "I would be more likely to participate in climate action if it involved (choose one):",
        optionA: "Large-scale protests and demonstrations.",
        optionB: "Individual actions that reduce my carbon footprint.",
        optionC: "Volunteering my time with environmental organizations.",
        optionD: "Learning more about new climate technologies.",
        correctOption: "optionD"
    },

    {
        question: "When it comes to climate change solutions, I find topics related to (choose one):",
        optionA: "Policy and legislation most interesting.",
        optionB: "Technological innovations most engaging.",
        optionC: "Social justice and equity issues most important.",
        optionD: "Individual lifestyle changes most accessible.",
        correctOption: "optionD"
    },


    {
        question: "Staying informed about climate change is important to me. I primarily rely on information from (choose one):",
        optionA: "Social media and online influencers.",
        optionB: "Scientific publications and research reports.",
        optionC: "News outlets and documentaries.",
        optionD: "Environmental organizations and advocacy groups.",
        correctOption: "optionD"
    },

    {
        question: "I believe the most effective way to address climate change is through (choose one):",
        optionA: "Individual actions and behaviour changes.",
        optionB: "Systemic transformations and policy changes.",
        optionC: "Technological advancements and clean energy solutions.",
        optionD: "A combination of the above.",
        correctOption: "optionD"
    },

    {
        question: "If I could learn more about one specific aspect of climate change, it would be (choose one):",
        optionA: "The science behind climate change and its impacts.",
        optionB: "The economic implications of climate change solutions.",
        optionC: "The role of activism and social movements in climate change.",
        optionD: "Sustainable practices and eco-friendly living.",
        correctOption: "optionD"
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
    window.location.href = 'course-details2.html';
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
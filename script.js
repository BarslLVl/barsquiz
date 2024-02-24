// Questions
const questions = {
  Sports: [
    {
      question: "What sport does Cristiano Ronaldo play?",
      options: ["Football", "Basketball", "Tennis", "Golf"],
      answer: "Football"
    },
    {
      question: "Who won the FIFA World Cup 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      answer: "France"
    },
    {
      question: "How many players are on the basketball team?",
      options: ["10", "15", "5", "20"],
      answer: "10"
    },
    {
      question: "Who holds the record for the most Olympic gold medals?",
      options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Serena Williams"],
      answer: "Michael Phelps"
    },
    {
      question: "In which year were the first Winter Olympic Games held?",
      options: ["1924", "1930", "1940", "1950"],
      answer: "1924"
    },
    {
      question: "How long is a game in football?",
      options: ["55 minutes", "30 minutes", "15 minutes", "45 minutes"],
      answer: "45 minutes"
    },
    {
      question: "Who holds the record for the most points in one NBA season?",
      options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Wilt Chamberlain"],
      answer: "Wilt Chamberlain"
    },
    {
      question: "Which golfer has won the most majors?",
      options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Gary Player"],
      answer: "Jack Nicklaus"
    },
    {
      question: "Who holds the record for the most goals in one NHL season?",
      options: ["Wayne Gretzky", "Mario Lemieux", "Sidney Crosby", "Alexander Ovechkin"],
      answer: "Wayne Gretzky"
    },
    {
      question: "What technique is there in football?",
      options: ["Front step", "Suplex move", "Spinning kick", "Forward kick"],
      answer: "Spinning kick"
    }
  ],
  Movies: [
    {
      question: "Who directed the movie 'Inception'?",
      options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Martin Scorsese"],
      answer: "Christopher Nolan"
    },
    {
      question: "In what year was the first film made 'Train Arrival at La Ciotat Station'?",
      options: ["1890", "1895", "1900", "1884"],
      answer: "1895"
    },
    {
      question: "What is the name of Simba's father from the cartoon 'The Lion King'?",
      options: ["Scar", "Mufasa", "Chenzi", "Kovu"],
      answer: "Mufasa"
    },
    {
      question: "How many labors did Hercules have? Cartoon 'Hercules 1997'",
      options: ["8 feats", "15 feats", "10 feats", "12 feats"],
      answer: "12 feats"
    },
    {
      question: "Who was Jackie Chan in the movie 'Rush Hour'?",
      options: ["Consul Lee", "Agent Lee", "Inspector Lee", "Detective Lee"],
      answer: "Inspector Lee"
    },
    {
      question: "What is the name of the main character in the movie 'The Lion King'?",
      options: ["Simba", "Nala", "Zazu", "Leo"],
      answer: "Simba"
    },
    {
      question: "What planet did Jake Sully fly to? From the movie 'Avatar'",
      options: ["Galatea", "Pandora", "Zephyrion", "Equinox"],
      answer: "Pandora"
    },
    {
      question: "How many parts are there in the film 'Harry Potter'?",
      options: ["4", "11", "7", "8"],
      answer: "7"
    },
    {
      question: "What is the name of the main character in the movie 'Home Alone 1990'?",
      options: ["Marvin Merchants", "Fuller McCull", "Scott McCall", "Kevin McCull"],
      answer: "Kevin McCull"
    },
    {
      question: "Who played the character 'The Little Mermaid' in the movie 'The Little Mermaid'?",
      options: ["Belle", "Jasmine", "Ariel", "Pocahontas"],
      answer: "Ariel"
    }
  ],
  Games: [
    {
      question: "What is the best-selling video game of all time?",
      options: ["Minecraft", "Tetris", "Grand Theft Auto V", "Wii Sports"],
      answer: "Minecraft"
    },
    {
      question: "What is the name of the first game released in 1990?",
      options: ["Wolfenstein 3D", "Super Mario Bros.", "Pac Man", "Tetris"],
      answer: "Pac Man"
    },
    {
      question: "In what year was the very first part of counter-strike released?",
      options: ["2000", "1997", "1999", "1993"],
      answer: "2000"
    },
    {
      question: "Which company developed the game 'The Witcher 3: Wild Hunt'?",
      options: ["Blizzard Entertainment", "CD Projekt Red", "Ubisoft", "Rockstar Games"],
      answer: "CD Projekt Red"
    },
    {
      question: "Which of the following genres does not belong to video games?",
      options: ["RPG", "RTS", "FPS", "DVR"],
      answer: "DVR"
    },
    {
      question: "In which year was the first part of the `Assassin's Creed` game series released?",
      options: ["2005", "2007", "2009", "2011"],
      answer: "2007"
    },
    {
      question: "Which character is the main protagonist of the 'Metal Gear Solid' game series?",
      options: ["Solid Snake", "Duke Nukem", "Master Chief", " Lara Croft"],
      answer: "Solid Snake"
    },
    {
      question: "Which game received the 'Game of the Year' award at The Game Awards 2020?",
      options: ["Cyberpunk 2077", "Ghost of Tsushima", "The Last of Us Part II", "Animal Crossing: New Horizons"],
      answer: "The Last of Us Part II"
    },
    {
      question: "Who is the main character in the game series 'Uncharted'?",
      options: ["Nathan Drake", "Joel", "Marcus Fenix", "Rick"],
      answer: "Nathan Drake"
    },
    {
      question: "Which game introduced the concept of 'bullet time,' allowing players to slow down time during combat?",
      options: ["Max Payne", "Half-Life", "Call Of Duty", "Halo"],
      answer: "Max Payne"
    }
  ],
  Math: [
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.18", "3.12"],
      answer: "3.14"
    },
    {
      question: "What is the operation opposite to multiplication?",
      options: ["Division", "Subtraction", "Addition", "Exponentiation"],
      answer: "Division"
    },
    {
      question: "Which number is prime?",
      options: ["12", "17", "20", "30"],
      answer: "17"
    },
    {
      question: "What percentage of 80 is 20?",
      options: ["20%", "15%", "25%", "30%"],
      answer: "25%"
    },
    {
      question: "What is the result of 100 + 100?",
      options: ["200", "100", "300", "400"],
      answer: "200"
    },
    {
      question: "What is the cube of the number 5?",
      options: ["25", "155", "125", "75"],
      answer: "125"
    },
    {
      question: "How many tens are in the number 357?",
      options: ["3", "5", "7", "50"],
      answer: "5"
    },
    {
      question: "Solve the equation: 2x−5=11 ",
      options: ["x = 3", "x = 8", "x = 9", "x = 6"],
      answer: "x = 8"
    },
    {
      question: "Find the value: 5(c−2)=15 ",
      options: ["c = 3", "c = 5", "c = 4", "c = 6"],
      answer: "c = 3"
    },
    {
      question: "If the price of a product increases from $50 to $60, by what percentage does it increase?",
      options: ["10%", "15%", "20%", "25%"],
      answer: "10%"
    }
  ]
};

  
let interval;
let currentQuestionIndex = 0;
let currentTopic = '';
let autoSwitchTimeout;

function loadQuestions(topic) {
    currentTopic = topic;
    const quizContainer = document.getElementById('quiz');
    const topicQuestions = questions[topic];

    quizContainer.innerHTML = '';

    const questionElem = document.createElement('div');
    questionElem.classList.add('question');

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}: ${topicQuestions[currentQuestionIndex].question}`;

    const optionsList = document.createElement('ul');

    topicQuestions[currentQuestionIndex].options.forEach((opt, optIndex) => {
        const option = document.createElement('li');

        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', `question${currentQuestionIndex}`);
        radioInput.setAttribute('id', `option${optIndex}`);
        radioInput.setAttribute('value', opt);
        radioInput.dataset.answer = topicQuestions[currentQuestionIndex].answer;
        radioInput.onclick = submitAnswer;

        const label = document.createElement('label');
        label.setAttribute('for', `option${optIndex}`);
        label.textContent = opt;

        option.appendChild(radioInput);
        option.appendChild(label);
        optionsList.appendChild(option);
    });

    // Add "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = true;
    nextButton.className = 'next-button';

    nextButton.onclick = function () {
        currentQuestionIndex++;
        loadQuestions(currentTopic);
    };

    // Add a check for option selection to enable the "Next" button
    optionsList.addEventListener('change', function () {
        nextButton.disabled = false;
    });

    questionElem.appendChild(questionTitle);
    questionElem.appendChild(optionsList);
    questionElem.appendChild(nextButton);

    // Hide the block with topic options
    topicOptions.style.display = 'none';

    // Show the quiz container
    quizContainer.style.display = 'block';

    const timerDisplay = document.createElement('span');
    timerDisplay.id = `timer${currentQuestionIndex}`;

    questionElem.appendChild(questionTitle);
    questionElem.appendChild(optionsList);
    questionElem.appendChild(timerDisplay);

    quizContainer.appendChild(questionElem);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.onclick = function() { location.reload(); };
    exitButton.className = 'exit-button';

    // Then add the "Exit" button
    quizContainer.appendChild(exitButton);

    // First add the "Next" button
    quizContainer.appendChild(nextButton);

    const tenSeconds = 10;
    startTimer(tenSeconds, timerDisplay);

    // Hide the title and question selection menu
    document.getElementById('quizTitle').style.display = 'none';
    document.getElementById('topics').style.display = 'none';
}

// Check the answer to the question and switch to the next question
function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions[currentTopic].length) {
      // If it's the last question, go to the scoreboard
      displayScoreBoard();
  } else {
      loadQuestions(currentTopic);
  }
}

// Start the timer for each question
function startTimer(duration, display) {
  let timer = duration;
  interval = setInterval(function () {
      const minutes = parseInt(timer / 60, 10);
      const seconds = parseInt(timer % 60, 10);
      const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

      display.textContent = `${minutesStr}:${secondsStr}`;

      if (--timer < 0) {
          clearInterval(interval);
          display.textContent = '00:00'; // Display 00:00 after the end of time

          const radios = document.querySelectorAll('input[type="radio"]');
          radios.forEach(radio => {
              radio.disabled = true; // Disable radio buttons after time expires
          });

          const timerDisplay = document.getElementById(`timer${currentQuestionIndex}`);
          const timeUpMessage = document.createElement('p');
          timeUpMessage.textContent = 'Time is up! The answer is automatically counted as incorrect. You will be automatically switched to the next page within 5 seconds!';
          timeUpMessage.style.color = 'red';
          timeUpMessage.className = 'wrong-answer';
          timerDisplay.parentNode.appendChild(timeUpMessage);

          // Display next question automatically after time has expired
          setTimeout(loadNextQuestion, 5000); // Is the delay time before the next question is automatically loaded (in milliseconds)
      }
  }, 1000);
}

  
  
  
  
  
  function submitQuiz() {
    clearInterval(interval);
  
    const quizContainer = document.getElementById('quiz');
    const radios = quizContainer.querySelectorAll('input[type="radio"]:checked');
  
    radios.forEach(radio => {
      const parentQuestion = radio.closest('.question');
      const userAnswer = radio.value;
  
      if (radio.dataset.answer === userAnswer) {
        const correctAnswer = document.createElement('p');
        correctAnswer.textContent = 'Correct!';
        correctAnswer.className = 'correct-answer';
        parentQuestion.appendChild(correctAnswer);
        ScoreBoard.correctAnswers += 1;
      } else {
        const wrongAnswer = document.createElement('p');
        wrongAnswer.textContent = 'Incorrect!';
        wrongAnswer.className = 'wrong-answer';
        parentQuestion.appendChild(wrongAnswer);
      }
  
      radio.disabled = true;
    });
  
    // Update ScoreBoard data
ScoreBoard.player = document.getElementById('nickname').value;
ScoreBoard.topic = currentTopic;

if (currentQuestionIndex === 9) {
  displayScoreBoard();
} else {
  const nextButton = document.querySelector('button');
  nextButton.disabled = false;
}

document.getElementById('quizTitle').style.display = 'none';
document.getElementById('topics').style.display = 'none';
}

function submitAnswer() {
  clearInterval(interval); // Stop the timer after selecting an answer

  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) {
    // If no answer is selected, consider it incorrect
    const timeOverMessage = document.createElement('p');
    timeOverMessage.textContent = 'Time is over! Answer not submitted.';
    timeOverMessage.className = 'wrong-answer';
    const parentQuestion = checkedRadio.closest('.question');
    parentQuestion.appendChild(timeOverMessage);
    radios.forEach(radio => {
      radio.disabled = true;
    });
    submitQuiz();
    return;
  }

  radios.forEach(radio => {
    radio.disabled = true;
  });

  submitQuiz();
}

function ExitQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions[currentTopic].length) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const resultText = document.createElement('p');
    resultText.textContent = 'End of the quiz!';
    quizContainer.appendChild(resultText);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.onclick = function() {
      location.reload();
    };

    quizContainer.appendChild(exitButton);

    // Hide the title and topic selection menu
    document.getElementById('quizTitle').style.display = 'none';
    document.getElementById('topics').style.display = 'none';
    return;
  }

  loadQuestions(currentTopic);
}

// Notification Bar "nickname"
document.getElementById('submitNickname').addEventListener('click', function() {
  const nicknameInput = document.getElementById('nickname');
  const nickname = nicknameInput.value;
  const notificationBar = document.getElementById('notification-bar');

  if (!nickname) {
    notificationBar.textContent = "OOOOPS! You forgot to enter your nickname before you started playing.";
    notificationBar.classList.add('visible');
    setTimeout(() => {
      notificationBar.classList.remove('visible');
    }, 7000);
    return;
  }

  // Show the container with questions
  document.getElementById('quiz').style.display = 'block';
  // Show buttons for selecting question topics
  document.querySelector('.options').style.display = 'block';
  // Hide the container for entering a nickname
  document.querySelector('.nickname').style.display = 'none';

  loadQuestions(document.getElementById('topicOptions').value); // Load questions for the selected topic
});

// ScoreBoard
const ScoreBoard = {
  player: '',
  correctAnswers: 0,
  totalQuestions: 10,
  topic: ''
};

function displayScoreBoard() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = ''; // Clear the quiz container

  const scoreBoardElem = document.createElement('div');
  scoreBoardElem.classList.add('scoreboard');

  const playerName = document.createElement('p');
  playerName.textContent = `Player: ${ScoreBoard.player}`;
  playerName.style.fontSize = "35px"; // Increase font size

  const correctAnswers = document.createElement('p');
  correctAnswers.textContent = `Correct Answers: ${ScoreBoard.correctAnswers} out of ${ScoreBoard.totalQuestions}`;
  correctAnswers.style.fontSize = "35px"; // Increase font size

  const topicPlayed = document.createElement('p');
  topicPlayed.textContent = `Topic: ${ScoreBoard.topic}`;
  topicPlayed.style.fontSize = "35px"; // Increase font size

  scoreBoardElem.appendChild(playerName);
  scoreBoardElem.appendChild(correctAnswers);
  scoreBoardElem.appendChild(topicPlayed);

  quizContainer.appendChild(scoreBoardElem);

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.onclick = function() {
  location.reload();
  };
  exitButton.className = 'exit-button';
  // FeedBack button
  quizContainer.appendChild(exitButton);
  const feedbackButton = document.createElement('button');
  feedbackButton.textContent = 'Leave Feedback';
  feedbackButton.onclick = leaveFeedback;
  feedbackButton.className = 'feedback-button';
  
  quizContainer.appendChild(feedbackButton);

  // Hide the title and topic selection menu
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}
function leaveFeedback() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const feedbackForm = document.createElement('form');
  feedbackForm.id = 'feedbackForm';
  feedbackForm.style.display = 'flex';
  feedbackForm.style.flexDirection = 'column';

  const feedbackLabel = document.createElement('label');
  feedbackLabel.textContent = 'Your Feedback:';
  feedbackLabel.style.marginBottom = '10px';

  const feedbackInput = document.createElement('textarea');
  feedbackInput.name = 'feedback';
  feedbackInput.rows = '4';
  feedbackInput.required = true;
  feedbackInput.style.width = '100%';
  feedbackInput.style.height = '150px';
  feedbackInput.style.fontSize = '30px';
  feedbackInput.style.marginBottom = '10px';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Feedback';
  submitButton.onclick = submitFeedback;
  submitButton.style.alignSelf = 'flex-end';

  feedbackForm.appendChild(feedbackLabel);
  feedbackForm.appendChild(feedbackInput);
  feedbackForm.appendChild(submitButton);

  quizContainer.appendChild(feedbackForm);

  const style = document.createElement('style');
  style.textContent = `
    #feedbackForm textarea {
      width: 100%;
      height: 150px;
      font-size: 50px;
    }
  `;
  quizContainer.appendChild(style);
}

// Feedback
function submitFeedback(event) {
  event.preventDefault();

  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackText = feedbackForm.elements.feedback.value;

  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const feedbackThanks = document.createElement('p');
  feedbackThanks.textContent = 'Thank you for your feedback!';

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.onclick = function () {
    location.reload();
  };
  exitButton.className = 'exit-button';

  quizContainer.appendChild(feedbackThanks);
  quizContainer.appendChild(exitButton);
}
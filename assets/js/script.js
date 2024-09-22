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



let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let interval;
let currentTopic = '';
let timerRunning = false;

// Handle nickname submission and show topics
document.getElementById('submitNickname').addEventListener('click', function () {
  const nicknameInput = document.getElementById('nickname').value.trim();
  const notificationBar = document.getElementById('notification-bar');
  const welcomeText = document.getElementById('welcome-text');
  const topicOptions = document.getElementById('topicOptions');
  const nicknameSection = document.querySelector('.nickname');

  if (!nicknameInput) {
    notificationBar.textContent = "OOOOPS! You forgot to enter your nickname before you started playing.";
    notificationBar.classList.add('visible');
    setTimeout(() => {
      notificationBar.classList.remove('visible');
    }, 3000);
  } else {
    welcomeText.style.display = 'none';
    nicknameSection.style.display = 'none';
    topicOptions.style.display = 'block';
  }
});

// Dynamically create topic buttons based on available topics
function createTopicButtons() {
  const topics = Object.keys(questions);
  const topicOptionsContainer = document.getElementById('topicOptions');

  topicOptionsContainer.innerHTML = '';

  topics.forEach(topic => {
    const button = document.createElement('button');
    button.textContent = topic;
    button.className = 'topic-button';
    button.onclick = () => loadQuestions(topic);
    topicOptionsContainer.appendChild(button);
  });
}

// Load questions for the selected topic
function loadQuestions(topic) {
  currentTopic = topic;
  const quizContainer = document.getElementById('quiz');
  const topicQuestions = questions[topic];

  currentQuestionIndex = 0;
  totalQuestions = topicQuestions.length;
  document.getElementById('topicOptions').style.display = 'none';
  document.getElementById('quiz-layout').style.display = 'block';
  document.getElementById('timer-container').style.display = 'block';

  quizContainer.innerHTML = ''; // Clear previous content

  // Load the first question
  displayQuestion(topicQuestions[currentQuestionIndex]);
}

function displayQuestion(questionObj) {
  clearTimeout(interval);
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const questionElem = document.createElement('div');
  questionElem.classList.add('question');

  const questionTitle = document.createElement('h3');
  questionTitle.textContent = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;
  questionElem.appendChild(questionTitle);

  // Create list of options
  const optionsList = document.createElement('ul');
  questionObj.options.forEach((opt, optIndex) => {
    const optionElem = document.createElement('li');

    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', `question${currentQuestionIndex}`);
    radioInput.setAttribute('id', `option${optIndex}`);
    radioInput.setAttribute('value', opt);
    radioInput.dataset.answer = questionObj.answer;

    const label = document.createElement('label');
    label.setAttribute('for', `option${optIndex}`);
    label.textContent = opt;

    optionElem.appendChild(radioInput);
    optionElem.appendChild(label);
    optionsList.appendChild(optionElem);

    // Enable "Next" button when an option is selected and validate answer
    radioInput.addEventListener('change', function () {
      document.querySelector('.next-button').disabled = false;
      validateAnswer(radioInput.value, radioInput.dataset.answer);
      stopTimer(); // Stop the timer when the answer is selected
    });
  });

  quizContainer.appendChild(questionElem);
  quizContainer.appendChild(optionsList);

  // Add "Next" button
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = true;
  nextButton.className = 'next-button';

  nextButton.onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
      displayQuestion(questions[currentTopic][currentQuestionIndex]);
    } else {
      displayScoreBoard(); // Show scoreboard when all questions are done
    }
  };

  quizContainer.appendChild(nextButton);

  // Add "Exit" button
  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.className = 'exit-button';
  exitButton.onclick = function () {
    displayScoreBoard();
  };
  quizContainer.appendChild(exitButton);

  // Timer logic
  const timerDisplay = document.getElementById('timer');
  startTimer(10, timerDisplay);
}

// Timer function
function startTimer(duration, display) {
  let timer = duration;
  stopTimer();
  interval = setInterval(function () {
    const seconds = timer % 60;

    display.textContent = `${seconds}`;

    const percentage = (timer / duration) * 100;
    document.querySelector('.circle').style.strokeDasharray = `${percentage}, 100`;

    if (--timer < 0) {
      stopTimer();
      display.textContent = '0';
      submitAnswer(); // Automatically submit if time is up
    }
  }, 1000);
}

// Stop the timer and clear the interval
function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

// Validate the answer as soon as a selection is made
function validateAnswer(userAnswer, correctAnswer) {
  const quizContainer = document.getElementById('quiz');
  const resultMessage = document.createElement('p');

  if (userAnswer === correctAnswer) {
    resultMessage.textContent = 'Correct!';
    resultMessage.classList.add('correct-answer');
    correctAnswers++;
  } else {
    resultMessage.textContent = 'Incorrect!';
    resultMessage.classList.add('wrong-answer');
  }

  quizContainer.appendChild(resultMessage);
}

// Function to handle answer submission when time runs out
function submitAnswer() {
  stopTimer(); // Ensure the timer stops
  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  const quizContainer = document.getElementById('quiz');

  if (!checkedRadio) {
    const timeOverMessage = document.createElement('p');
    timeOverMessage.textContent = 'Time is up! The answer is automatically counted as incorrect. You will be automatically switched to the next page within 5 seconds!';
    timeOverMessage.className = 'wrong-answer';

    // Clear any existing time-up messages to avoid duplicates
    const existingMessages = document.querySelectorAll('.wrong-answer');
    existingMessages.forEach(message => message.remove());

    quizContainer.appendChild(timeOverMessage);

    radios.forEach(radio => {
      radio.disabled = true;
    });

    setTimeout(loadNextQuestion, 5000); // Automatically go to the next question after 5 seconds
    return;
  }

  radios.forEach(radio => {
    radio.disabled = true;
  });

  document.querySelector('.next-button').disabled = false;
}

// Load the next question after timeout or selection
function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentTopic].length) {
    displayQuestion(questions[currentTopic][currentQuestionIndex]);
  } else {
    displayScoreBoard();
  }
}

// Display the Scoreboard
function displayScoreBoard() {
  stopTimer(); // Stop the timer in the scoreboard view
  document.getElementById('timer-container').style.display = 'none';
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const scoreBoardElem = document.createElement('div');
  scoreBoardElem.classList.add('scoreboard');

  const playerName = document.getElementById('nickname').value;
  const scoreText = document.createElement('p');
  scoreText.innerHTML = `<span>Player:</span> ${playerName} <br> <span>Correct Answers:</span> ${correctAnswers} out of ${totalQuestions} <br> <span>Topic:</span> ${currentTopic}`;

  scoreBoardElem.appendChild(scoreText);
  quizContainer.appendChild(scoreBoardElem);

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.className = 'exit-button';
  exitButton.onclick = function () {
    location.reload();
  };

  quizContainer.appendChild(exitButton);

  // Add "Leave Feedback" button
  const feedbackButton = document.createElement('button');
  feedbackButton.textContent = 'Leave Feedback';
  feedbackButton.className = 'feedback-button';
  feedbackButton.onclick = leaveFeedback;
  quizContainer.appendChild(feedbackButton);
}

// Feedback form
function leaveFeedback() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const feedbackForm = document.createElement('form');
  feedbackForm.classList.add('feedback-form');

  const feedbackLabel = document.createElement('label');
  feedbackLabel.textContent = 'Your Feedback:';
  feedbackLabel.classList.add('feedback-label');

  const feedbackInput = document.createElement('textarea');
  feedbackInput.classList.add('feedback-input');
  feedbackInput.setAttribute('rows', '5');
  feedbackInput.setAttribute('placeholder', 'Enter your feedback here...');

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Feedback';
  submitButton.classList.add('feedback-button');
  submitButton.onclick = function (event) {
    event.preventDefault();
    // Handle feedback submission
    thankYouFeedback();
  };

  feedbackForm.appendChild(feedbackLabel);
  feedbackForm.appendChild(feedbackInput);
  feedbackForm.appendChild(submitButton);

  quizContainer.appendChild(feedbackForm);
}

// Thank you message after feedback
function thankYouFeedback() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';

  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Thank you for your feedback!';
  thankYouMessage.classList.add('thank-you-message');

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.className = 'exit-button';
  exitButton.onclick = function () {
    location.reload();
  };

  quizContainer.appendChild(thankYouMessage);
  quizContainer.appendChild(exitButton);
}

// Call the function to generate the buttons when the page loads
window.onload = function () {
  createTopicButtons();
};

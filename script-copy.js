const questions = {
  sports: [
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
      question: "Which sport is known as 'the king's game'?",
      options: ["Football", "Polo", "Cricket", "Rugby"],
      answer: "Polo"
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
      question: "Who holds the record for the most touchdowns in one NFL season?",
      options: ["Peyton Manning", "Tom Brady", "Drew Brees", "Aaron Rodgers"],
      answer: "Peyton Manning"
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
      question: "In which year were the first Summer Olympic Games held?",
      options: ["1896", "1900", "1904", "1908"],
      answer: "1896"
    }
    // Другие вопросы по спорту...
    
  ],
  movies: [
    {
      question: "Who directed the movie 'Inception'?",
      options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Martin Scorsese"],
      answer: "Christopher Nolan"
    },
    // Другие вопросы по кино...
  ],
  literary: [
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "Charles Dickens", "Mark Twain"],
      answer: "Harper Lee"
    },
    // Другие вопросы по литературе...
  ],
  games: [
    {
      question: "What is the best-selling video game of all time?",
      options: ["Minecraft", "Tetris", "Grand Theft Auto V", "Wii Sports"],
      answer: "Minecraft"
    },
    // Другие вопросы по играм...
  ],
  math: [
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.18", "3.12"],
      answer: "3.14"
    },
    // Другие вопросы по математике...
  ]
};

let interval; // Глобальная переменная для интервала таймера
let currentQuestionIndex = 0;
let currentTopic = '';
let autoSwitchTimeout; // Переменная для автоматического переключения

function loadQuestions(topic) {
  currentTopic = topic;
  const quizContainer = document.getElementById('quiz');
  const topicQuestions = questions[topic];

  quizContainer.innerHTML = ''; // Очищаем содержимое контейнера

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
    radioInput.onclick = submitAnswer; // При выборе ответа сразу проверяем его

    const label = document.createElement('label');
    label.setAttribute('for', `option${optIndex}`);
    label.textContent = opt;

    option.appendChild(radioInput);
    option.appendChild(label);
    optionsList.appendChild(option);
  });

  // Добавляем кнопку "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = true; // Начально кнопка неактивна

  nextButton.onclick = function () {
    currentQuestionIndex++;
    loadQuestions(currentTopic);
  };

  // Добавляем проверку на выбор ответа, чтобы активировать кнопку "Next"
  optionsList.addEventListener('change', function () {
    nextButton.disabled = false; // Кнопка активируется после выбора ответа
  });

  questionElem.appendChild(questionTitle);
  questionElem.appendChild(optionsList);
  questionElem.appendChild(nextButton); // Добавляем кнопку в элемент вопроса


  // Скрываем блок с вариантами тем
  topicOptions.style.display = 'none';

  // Показываем контейнер викторины
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

  // Затем добавляем кнопку "Exit"
  quizContainer.appendChild(exitButton);
  
  // Сначала добавляем кнопку "Next"
  quizContainer.appendChild(nextButton);

  const tenSeconds = 10;
  startTimer(tenSeconds, timerDisplay);

  // Скрываем заголовок и меню выбора вопросов
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}

// Проверяем ответ на вопрос и переключаемся на следующий вопрос
function loadNextQuestion() {
  currentQuestionIndex++;
  loadQuestions(currentTopic);
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
      display.textContent = '00:00'; // Отображаем 00:00 после окончания времени

      const radios = document.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
        radio.disabled = true; // Отключаем радиокнопки после истечения времени
      });

      const timerDisplay = document.getElementById(`timer${currentQuestionIndex}`);
      const timeUpMessage = document.createElement('p');
      timeUpMessage.textContent = 'Time is up! The answer is automatically counted as incorrect.';
      timeUpMessage.style.color = 'red';
      timeUpMessage.className = 'wrong-answer';
      timerDisplay.parentNode.appendChild(timeUpMessage);

      // Отображаем следующий вопрос автоматически после истечения времени
      setTimeout(loadNextQuestion, 5000); // Здесь 2000 - это время задержки перед автоматической загрузкой следующего вопроса (в миллисекундах)
    }
  }, 1000);
}





function submitQuiz() {
  clearInterval(interval); // Очищаем интервал таймера

  const quizContainer = document.getElementById('quiz');
  const radios = quizContainer.querySelectorAll('input[type="radio"]:checked');

  let score = 0;

  radios.forEach(radio => {
    const parentQuestion = radio.closest('.question');
    const correctAnswer = document.createElement('p');
    if (radio.dataset.answer === radio.value) {
      correctAnswer.textContent = 'Correct!';
      correctAnswer.className = 'correct-answer';
      parentQuestion.appendChild(correctAnswer);
      score += 1;
    } else {
      correctAnswer.textContent = `Incorrect! Correct answer: ${radio.dataset.answer}`;
      correctAnswer.className = 'wrong-answer';
      parentQuestion.appendChild(correctAnswer);
      const correctOption = parentQuestion.querySelector(`input[value="${radio.dataset.answer}"]`);
      correctOption.nextSibling.className = 'correct-answer';
    }
    radio.disabled = true; // Отключаем радиокнопки после выбора ответа
  });


  // Скрываем заголовок и меню выбора вопросов
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}

function submitAnswer() {
  clearInterval(interval); // Останавливаем таймер после выбора ответа

  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) {
    // Если не выбран ни один ответ, считаем его неверным
    const timerDisplay = document.getElementById(`timer${currentQuestionIndex}`);
    const timeOverMessage = document.createElement('p');
    timeOverMessage.textContent = 'Time is over! Answer not submitted.';
    timeOverMessage.className = 'wrong-answer';
    const parentQuestion = checkedRadio.closest('.question');
    parentQuestion.appendChild(timeOverMessage);
    radios.forEach(radio => {
      radio.disabled = true; // Отключаем все радиокнопки
    });
    submitQuiz(); // Проверяем ответ и показываем результат
    return;
  }

  radios.forEach(radio => {
    radio.disabled = true; // Отключаем все радиокнопки
  });

  submitQuiz(); // Проверяем ответ и показываем результат
}

function ExitQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions[currentTopic].length) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear the quiz container

    const resultText = document.createElement('p');
    resultText.textContent = 'End of the quiz!';
    quizContainer.appendChild(resultText);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.onclick = function () {
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

  // Показываем контейнер с вопросами
  document.getElementById('quiz').style.display = 'block';
  // Показываем кнопки выбора темы вопросов
  document.querySelector('.options').style.display = 'block';
  // Скрываем контейнер для ввода никнейма
  document.querySelector('.nickname').style.display = 'none';

  loadQuestions(document.getElementById('topicOptions').value); // Загружаем вопросы для выбранной темы
});











ДРУГОЙ КОД







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
      question: "Which sport is known as 'the king's game'?",
      options: ["Football", "Polo", "Cricket", "Rugby"],
      answer: "Polo"
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
      question: "Who holds the record for the most touchdowns in one NFL season?",
      options: ["Peyton Manning", "Tom Brady", "Drew Brees", "Aaron Rodgers"],
      answer: "Peyton Manning"
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
      question: "In which year were the first Summer Olympic Games held?",
      options: ["1896", "1900", "1904", "1908"],
      answer: "1896"
    }
    // Другие вопросы по спорту...
    
  ],
  Movies: [
    {
      question: "Who directed the movie 'Inception'?",
      options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Martin Scorsese"],
      answer: "Christopher Nolan"
    },
    // Другие вопросы по кино...
  ],
  Games: [
    {
      question: "What is the best-selling video game of all time?",
      options: ["Minecraft", "Tetris", "Grand Theft Auto V", "Wii Sports"],
      answer: "Minecraft"
    },
    // Другие вопросы по играм...
  ],
  Math: [
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.18", "3.12"],
      answer: "3.14"
    },
    // Другие вопросы по математике...
  ]
};

let interval; // Глобальная переменная для интервала таймера
let currentQuestionIndex = 0;
let currentTopic = '';
let autoSwitchTimeout; // Переменная для автоматического переключения

function loadQuestions(topic) {
  currentTopic = topic;
  const quizContainer = document.getElementById('quiz');
  const topicQuestions = questions[topic];

  quizContainer.innerHTML = ''; // Очищаем содержимое контейнера

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
    radioInput.onclick = submitAnswer; // При выборе ответа сразу проверяем его

    const label = document.createElement('label');
    label.setAttribute('for', `option${optIndex}`);
    label.textContent = opt;

    option.appendChild(radioInput);
    option.appendChild(label);
    optionsList.appendChild(option);
  });

  // Добавляем кнопку "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = true; // Начально кнопка неактивна

  nextButton.onclick = function () {
    currentQuestionIndex++;
    loadQuestions(currentTopic);
  };

  // Добавляем проверку на выбор ответа, чтобы активировать кнопку "Next"
  optionsList.addEventListener('change', function () {
    nextButton.disabled = false; // Кнопка активируется после выбора ответа
  });

  questionElem.appendChild(questionTitle);
  questionElem.appendChild(optionsList);
  questionElem.appendChild(nextButton); // Добавляем кнопку в элемент вопроса


  // Скрываем блок с вариантами тем
  topicOptions.style.display = 'none';

  // Показываем контейнер викторины
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

  // Затем добавляем кнопку "Exit"
  quizContainer.appendChild(exitButton);
  
  // Сначала добавляем кнопку "Next"
  quizContainer.appendChild(nextButton);

  const tenSeconds = 10;
  startTimer(tenSeconds, timerDisplay);

  // Скрываем заголовок и меню выбора вопросов
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}

// Проверяем ответ на вопрос и переключаемся на следующий вопрос
function loadNextQuestion() {
  currentQuestionIndex++;
  loadQuestions(currentTopic);
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
      display.textContent = '00:00'; // Отображаем 00:00 после окончания времени

      const radios = document.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
        radio.disabled = true; // Отключаем радиокнопки после истечения времени
      });

      const timerDisplay = document.getElementById(`timer${currentQuestionIndex}`);
      const timeUpMessage = document.createElement('p');
      timeUpMessage.textContent = 'Time is up! The answer is automatically counted as incorrect. You will be automatically switched to the next question within 5 seconds!';
      timeUpMessage.style.color = 'red';
      timeUpMessage.className = 'wrong-answer';
      timerDisplay.parentNode.appendChild(timeUpMessage);

      // Отображаем следующий вопрос автоматически после истечения времени
      setTimeout(loadNextQuestion, 5000); // Здесь 2000 - это время задержки перед автоматической загрузкой следующего вопроса (в миллисекундах)
    }
  }, 1000);
}





function submitQuiz() {
  clearInterval(interval); // Clear the timer interval

  const quizContainer = document.getElementById('quiz');
  const radios = quizContainer.querySelectorAll('input[type="radio"]:checked');

  radios.forEach(radio => {
    const parentQuestion = radio.closest('.question');
    const correctAnswer = document.createElement('p');
    if (radio.dataset.answer === radio.value) {
      correctAnswer.textContent = 'Correct!';
      correctAnswer.className = 'correct-answer';
      parentQuestion.appendChild(correctAnswer);
      ScoreBoard.correctAnswers += 1; // Increase correct answers count
    } else {
      correctAnswer.textContent = `Incorrect! Correct answer: ${radio.dataset.answer}`;
      correctAnswer.className = 'wrong-answer';
      parentQuestion.appendChild(correctAnswer);
      const correctOption = parentQuestion.querySelector(`input[value="${radio.dataset.answer}"]`);
      correctOption.nextSibling.className = 'correct-answer';
    }
    radio.disabled = true; // Disable radio buttons after answering
  });

  // Update ScoreBoard data
  ScoreBoard.player = document.getElementById('nickname').value;
  ScoreBoard.topic = currentTopic;

  if (currentQuestionIndex === 9) {
    displayScoreBoard(); // Show scoreboard after 10 questions
  } else {
    // Continue to the next question
    const nextButton = document.querySelector('button');
    nextButton.disabled = false;
  }


  // Скрываем заголовок и меню выбора вопросов
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}

function submitAnswer() {
  clearInterval(interval); // Останавливаем таймер после выбора ответа

  const radios = document.querySelectorAll('input[type="radio"]');
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) {
    // Если не выбран ни один ответ, считаем его неверным
    const timerDisplay = document.getElementById(`timer${currentQuestionIndex}`);
    const timeOverMessage = document.createElement('p');
    timeOverMessage.textContent = 'Time is over! Answer not submitted.';
    timeOverMessage.className = 'wrong-answer';
    const parentQuestion = checkedRadio.closest('.question');
    parentQuestion.appendChild(timeOverMessage);
    radios.forEach(radio => {
      radio.disabled = true; // Отключаем все радиокнопки
    });
    submitQuiz(); // Проверяем ответ и показываем результат
    return;
  }

  radios.forEach(radio => {
    radio.disabled = true; // Отключаем все радиокнопки
  });

  submitQuiz(); // Проверяем ответ и показываем результат
}

function ExitQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions[currentTopic].length) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear the quiz container

    const resultText = document.createElement('p');
    resultText.textContent = 'End of the quiz!';
    quizContainer.appendChild(resultText);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.onclick = function () {
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

  // Показываем контейнер с вопросами
  document.getElementById('quiz').style.display = 'block';
  // Показываем кнопки выбора темы вопросов
  document.querySelector('.options').style.display = 'block';
  // Скрываем контейнер для ввода никнейма
  document.querySelector('.nickname').style.display = 'none';

  loadQuestions(document.getElementById('topicOptions').value); // Загружаем вопросы для выбранной темы
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

  const correctAnswers = document.createElement('p');
  correctAnswers.textContent = `Correct Answers: ${ScoreBoard.correctAnswers} out of ${ScoreBoard.totalQuestions}`;

  const topicPlayed = document.createElement('p');
  topicPlayed.textContent = `Topic: ${ScoreBoard.topic}`;

  scoreBoardElem.appendChild(playerName);
  scoreBoardElem.appendChild(correctAnswers);
  scoreBoardElem.appendChild(topicPlayed);

  quizContainer.appendChild(scoreBoardElem);

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Exit';
  exitButton.onclick = function () {
    location.reload();
  };

  quizContainer.appendChild(exitButton);

  // Hide the title and topic selection menu
  document.getElementById('quizTitle').style.display = 'none';
  document.getElementById('topics').style.display = 'none';
}
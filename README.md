
# BarsQuiz
BarsQuiz is a game that will help you, or you and your friends/colleagues or family members, spend time playing together in an entertaining and informative way. When you go to the site, you have the opportunity to write your “nickname”, after which you can select any topic from the list, such as “Sports, Movies, Games, Math”, each of these topics has 10 different questions associated with one of these topics, as well as 4 answer choices of which only 1 is correct. But also during this game you only have 10 seconds to choose an answer, which means that you have a limited time for each question.

Users of this game can find out how well they know each topic (optional), which may have different questions with each topic. This site will be aimed at both adults and children, and will become a simple application for practice and entertainment, it can also be for learning, if a person does not know the answers, he can check which is correct (this will only show when choosing the correct answer, in order so that a person would try to guess which one is correct without writing down the answers somewhere in a notebook and the like)

![Main](docs/readme-photo/main.png)
The live link can be found here - [BarsQuiz](https://barsllvl.github.io/barsquiz/).

## Features
### Existing features
- Header
    - In the middle of the page where all the content is located, the title of the game “BarsQuiz” is indicated in the game font.
    - This title clearly tells the user what game they are currently playing.

        ![Header](docs/readme-photo/header.png)

- Main page
    - On the main page the user is given the opportunity to write his nickname.
    ![mnpage1](docs/readme-photo/mnpage1.png)
    - If the user has not written a nickname, the system warns about this by showing a message at the bottom.
    ![mgpage2](docs/readme-photo/mnpage2.png)

- Game Options
    - User can select any topic from the list, such as “Sports, Movies, Games, Math”

    ![Topic](docs/readme-photo/topic.png)
    - After selecting the topic, the user will be presented with 10 questions, each of which has 4 answer choices of which only 1 is correct. But also for each answer you are given 10 seconds to choose an answer.

    ![Question](docs/readme-photo/choice.png)
    - After selecting an answer, the user will be shown whether he answered correctly or not. But if you choose the wrong answer, the correct answer itself will not be shown, so that a person can personally guess, or personally find out the answer to a particular question, and thereby interest the person.
    ![CorrectAnsw](docs/readme-photo/correctAnsw.png)
    ![IncorrectAnsw](docs/readme-photo/incorrectAnsw.png)
    - If within 10 seconds the user does not have time to select an answer, the system will automatically write a message just below in red.
    ![no-answer](docs/readme-photo/no-answer.png)
- The Game Results(Scoreboard)
    - After finishing the game, the user will be presented with a scoreboard, which will show the user how well they know each topic.
    - The JavaScript code automatically calculates the correct answers that were selected by the user from all 10 questions and in the Scoreboard shows the user's nickname that was written at the very beginning, the number of correct answers out of 10, and what topic was selected.
    - ![scoreboard](docs/readme-photo/scoreboard.png)

- Feedback
    - The user can write his feedback about the game, this feedback will be sent to the developer.
    ![Feedback](docs/readme-photo/feedback.png)
## Features Left to Implement
- When there is time, I would like to add new topics and questions (with images) for this game.
## Testing
- I tested the game on the following browsers: Opera, Chrome, Microsoft Edge.
- I tested the game on the following devices: Laptop, Desktop, Mobile.
- I confirmed that the game works properly on all the devices and browsers.
- I confirmed that header, options, results, feedback, and questions are working properly.
- I confirmed that the colors and fonts chosen are easy to read and accessible by all users.
- ![testing](docs/readme-photo/testing.png)
- I confirmed that project is responsive, looks good and functions on all devices/screens.
## Bugs
### Solved bugs
- When I wrote JavaScript code to check the answer in a question, and so that the “Next” button would work only after the answer, there was a bug that the “Next” button would not work at all. The code was completely changed to a different one, I consulted with a friend who is more versed in JavaScript coding, and helped me solve it.
- Removing the starting/fixed the problem.
- Bug with an unanswered question. In the last question, if the player did not answer, after 5 seconds when the player should have been transferred to the page with the scoreboard, there was simply a blank page.
## Unfxied Bugs
- Better customize the scoreboard, highlight the player’s results, topic, name in a separate color and font.
- Customize FeedBack font.
## Validator Testing
- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/#validate_by_uri).
- CSS
    - No errors were returned when passing through the official [W3C CSS Validator (Jigsaw)](https://jigsaw.w3.org/css-validator/).
- JavaScript
    - No errors were returned when passing through the official [JSHint JavaScript Validator](https://jshint.com).
## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page provided the link to the completed website.

## Skeleton
1. Home page wireframe
    - [Mobile](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/home/phone.png)
    - [Tablet](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/home/tablet.png)
    - [Dekstop](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/home/dekstop.png)
2. Topic page wireframe
    - [Mobile](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/topic/phone.png)
    - [Tablet](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/topic/tablet.png)
    - [Dekstop](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/topic/dekstop.png)
3. Game page wireframe
    - [Mobile](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/game/phone.png)
    - [Tablet](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/game/tablet.png)
    - [Dekstop](https://github.com/BarslLVl/barsquiz/blob/main/assets/wireframes/game/dekstop.png)
#### Colour scheme
- Background colour  ![#2345dd](https://placehold.co/5x5/2345dd/2345dd)<br>
- Text colour ![#black](https://placehold.co/5x5/black/black)<br>
- Main container colour ![#white](https://placehold.co/5x5/white/white)<br>
- Main button colour ![#1c37af](https://placehold.co/5x5/1c37af/1c37af)<br>
- Exit button colour ![#darkred](https://placehold.co/5x5/darkred/darkred)<br>
- Next button colour ![#017a15](https://placehold.co/5x5/017a15/017a15)<br>
## Credits
### Content
- Code for fixing footer, setting timer, adding function taken from [w3schools](https://www.w3schools.com) and [freeCodeCamp](https://www.freecodecamp.org).
 - Helpfor understunding [Local Storage](https://javascript.info/localstorage) and [Promise](https://gomakethings.com/promise-based-xhr/)
 ### Code attribution
 - Scoreboard [increase score in quiz](https://stackoverflow.com/questions/70953748/increase-score-in-quiz-using-javascript)
 - Notification bar [YouTube](https://www.youtube.com/watch?v=mkNITfM1gm8&ab_channel=GreatStack) and [stackoverflow](https://stackoverflow.com/questions/39646065/make-notification-bar-slide-up-from-the-bottom)
 - Videos that helped me with the code [YouTube1](https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack), [Youtube2](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified) and [YouTube3](https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal)
### Media
- To create my logo I used [myfreelogomaker](https://myfreelogomaker.com).
- 404 image, wireframes taken from [pngtree](https://pngtree.com) and [Istock](https://www.istockphoto.com/illustrations/computer-sketch-desktop-pc-desk)
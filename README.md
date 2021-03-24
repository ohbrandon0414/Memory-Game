# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Brandon Oh**

Time spent: **2.5** hours spent in total

Link to project: https://glitch.com/edit/#!/hip-lizard-soursop

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The number of patterns are randomized everytime

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/DaNcvYp.gif)
Player gets to win the game
![](https://i.imgur.com/GAn73L8.gif)
When player uses all the time game is over
![](https://i.imgur.com/K3ee5Ou.gif)
When player makes 3 mistakes the game is over

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   <br/>[https://imgur.com/, https://stackoverflow.com/questions/30427882/make-a-timer-using-setinterval]
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   <br/><br/>The biggest challenge throughout this submission was the unfamiliarity of the tools and language that I used throughout this project.
   Before this project, I had more experience with back-end development, and it was a struggle to adapt myself to the syntax of the language being used in this submission.
   For example, it took me some time to understand the relationships between the scripts and files used in different languages.
   Throughout the progress and the instructions given in the instructions, I had to look up other things on the internet to understand how some built-in functions operate and the conventions.
   However, this progress itself, looking up syntax and learning new concepts of a new language or a framework, is not something new to me. I have some experience getting introduced to unfamiliar languages, libraries, and frameworks,
   and thus writing the code was a fun and exciting experience. Therefore, those experiences helped me overcome the challenge since I knew that I had to try different things to get used to the unfamiliar syntax and features.
   Moreover, another challenge during this submission was the difficulty with debugging. Glitch made it easier for the coder to spontaneously see the results, and using the console was a great way to monitor the values.
   However, it was sometimes difficult to spot the direct source of the problem, and it took me some time to find the issue. I overcame this challenge by attempting different input values and taking the time to spot the issues.
   After all, the basics of debugging were similar to those of back-end development.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   <br/><br/>After my submission, the main question is how to make the web smoother and more spontaneous.
   Even during this simple web development, there was some lagging, and I certainly think my output could be much smoother than actual professional websites containing much more complicated features.
   Thus, I am much curious about how to improve the quality of web developments in professional backgrounds. Moreover, throughout the process, I spent a quality of time debugging problems.
   The fact that many functions were going on made it more challenging to find the issues.
   However, the Memory game was a simple application compared to other big web-development that contain a lot of information and features.
   Thus, it made me curious about how developers have everything under control and make it easier to work as a team.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   <br/><br/>One of the main things that I would have worked on with more time would be refactoring the guess function.
   I think the function consists of a variety of parts and could be split into different sections.
   I especially felt the need for refactoring when I was trying to implement the timer because I think I could have reused the part where the user got it right, and the timer had to show differently.
   Also, if the time allowed, I think I could have made the layout clearer and more logical.
   As a simple example, I think using a variable to check whether the player won would have been better than having two functions: winGame and loseGame.
   Moreover, I think additional features would have liked to implement if the time allowed. First of all, I think it would have been more interesting if the buttons changed their locations after each turn.
   This would have made the game less obvious and exciting. Also, implementing a scoring system and letting the user have a leaderboard would have been a great feature to add, although some back-end applications are required.
   Overall, I think improvements should be made to this web development if the situation had let me.

## License

    Copyright [Brandon Oh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

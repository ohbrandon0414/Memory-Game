//Global Variables
var pattern = [1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
var time;
var timeleft = 10;
// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  randomizePattern();
  clueHoldTime = 1000;
  gamePlaying = true;
  timeleft = 10;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  clearInterval(time);
  document.getElementById("countdown").style.display = "none";
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 523.25,
  2: 587.33,
  3: 659.25,
  4: 698.46,
  5: 783.99
};

const imgs = {
  1: "img1",
  2: "img2",
  3: "img3",
  4: "img4",
  5: "img5"
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
  lightButton(btn);
}
function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  stopShowingImg(btn);
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  let img = document.getElementById(imgs[btn]);
  img.style.display = "inline-block";
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  stopShowingImg(btn);
}

function stopShowingImg(btn) {
  let img = document.getElementById(imgs[btn]);
  img.style.display = "none";
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  if (clueHoldTime > 200) {
    clueHoldTime -= clueHoldTime / pattern.length;
  }
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clearInterval(time);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn != pattern[guessCounter]) {
    // player guessed it wrong - player loses
    mistakes++;
    if (mistakes == 3) {
      loseGame();
    } else {
      // play the sequence again
      playClueSequence();
    }
  } else {
    if (guessCounter == 0) {
      timer();
    }
    if (progress == guessCounter) {
      if (progress == pattern.length - 1) {
        // player won
        winGame();
      } else {
        // pattern is right add the next segment
        progress++;
        document.getElementById("countdown").style.display = "none";
        playClueSequence();
      }
    } else {
      // check if next guess is correct
      guessCounter++;
    }
  }
}

function randomizePattern() {
  let pattern_size = Math.floor(Math.random() * 5 + 4);
  pattern = [];
  for (let i = 1; i < pattern_size; i++) {
    pattern.push(Math.floor(Math.random() * 4 + 1));
  }
}

function timer() {
  clearInterval(time);
  timeleft = 5;
  time = setInterval(function() {
    if (timeleft < 1) {
      clearInterval(time);
      loseGame();
    } else {
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
  document.getElementById("countdown").style.display = "block";
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

#project related to markedown

#project link
[click gere ] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

#project 1

``` javascript

const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

#project 2

```javascript

const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);
// this will give empty values

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight  = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'pls give a valid height';
  }
  else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'pls give a valid weight';
  }else {
    const bmi = (weight /((height*height)/1000)).toFixed(2);
    results.innerHTML = `bmi is ${bmi}`
  }
});
```

#project 3

``` javascript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `${date.toLocaleTimeString()}`
}, 1000);
```

#project 4

```javascript
let random_number = parseInt(Math.random() * 100 + 1);
// console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validation of guess
  if (isNaN(guess)) {
    alert('pls enter aa valid number');
  } else if (guess < 1) {
    alert('pls enter aa valid number more than 1');
  } else if (guess > 100) {
    alert('pls enter aa valid number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`game over, random number was  ${random_number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random_number) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < random_number) {
    displayMessage('Num is Too low');
  } else if (guess > random_number) {
    displayMessage('Num is Too high');
  }
}

function displayGuess(guess) {
  //cleanUpGuess
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuesses++;

  remaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message) {
  LowOrHigh.innerHTML = `<h3>${message} </h3>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    random_number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

#project 4 soln 
```javascript
// generate random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let intervalID;
const startChangingColor = () => {
  if (!intervalID) {
    intervalID = setInterval(ChangebgColor, 1000);
  }

  function ChangebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

#project 6 

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
     <div class = "color" >
    <table>
      <tr>
        <th>Key</th>
        <th>keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ?"space" :e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
     
    </table>
     </div>
 `;
});

```

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

#project 1

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
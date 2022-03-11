var result = document.querySelector('.winMessage');
var inputValue = document.querySelectorAll('input');
var spanInnerText = document.querySelectorAll('span');
var solution = [];
for (let i = 0; i < inputValue.length; i++) {
  solution.push({
    number: spanInnerText[i].innerText,
    name: inputValue[i].value,
  });
}
const rollTheDice = document.querySelectorAll('button');
for (let i = 0; i < rollTheDice.length - 1; i++) {
  rollTheDice[i].addEventListener('click', (e) => {
    const roll = (Math.random() * (6 - 1) + 1).toFixed(0);
    spanInnerText[i].innerText = roll;
    solution[i].number = roll;
    rollTheDice[i].setAttribute('disabled', 'disabled');
  });
}


rollTheDice[rollTheDice.length - 1].addEventListener('click', (e) => {
  let check = 0;
  solution.forEach((data) => {
    if (data.number === '') check++;
  });
  if (check !== 0) {
    result.innerText = 'All players must play';
  } else {
    let winnerposition = 0;
    for (let i = 0; i < solution.length; i++) {
      if (solution[winnerposition].number < solution[i].number) {
        winnerposition = i;
      }
    }
    result.innerText = `The winer is ${solution[winnerposition].name}`;
  }
});
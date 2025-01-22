console.log('Добро пожаловать в игру "Угадай число"! Компьютер 1 уже загадал число от 1 до 100.')

function firstPlayer() {
    return ~~(Math.random() * (100 - 1)) + 1;
}



function secondPlayer(guessNumber) {
  let low = 1;
  let high = 100;
  console.log(guessNumber);
  while (true) {
    let mid = ~~((high + low) / 2);
    if (mid === guessNumber) {
        console.log(`Компьютер 2: Пробую число ${mid}? \nКомпьютер 1: Угадал!`);
        break;
    }
    else if (mid < guessNumber) {
        console.log(`Компьютер 2: Пробую число ${mid}? \nКомпьютер 1: Больше!`);
        low = mid + 1;
    }
    else {
        console.log(`Компьютер 2: Пробую число ${mid}? \nКомпьютер 1: Меньше!`);
        high = mid - 1;
    }
  }

}

const guessNumber = firstPlayer();
secondPlayer(guessNumber);
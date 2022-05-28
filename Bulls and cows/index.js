let generateComputer = multiplierDefinition();
guessing(generateComputer);

function guessing(num) {
  console.log("У вас есть 3 попытки, чтоб угадать число");
  for (let i = 0; i < 2; i++) {
    debugger;
    let userNum = prompt("Введите число без повторяющихся цифр внутри").split(
      ""
    );
    console.log(userNum, num);
    let res = concurrence(num, userNum);
    if (res.length == num.length) {
      alert("Вы выиграли");
      return num.join("");
    }
  }
  alert(`У вас не получилось отгадать число: ${num.join("")}`);
}

function multiplierDefinition() {
  let ind = Math.floor(Math.random() * (2 - 0) + 0);
  let newGenerate = [100, 1000].filter((el, index) =>
    index === ind ? true : false
  );
  let generateNum = Math.floor(Math.random() * (1000 * newGenerate[0] - 0) + 0);
  let arrResult = [];
  String(generateNum)
    .split("")
    .forEach((el) => {
      if (!arrResult.includes(el)) {
        arrResult.push(el);
        return el;
      }
    });
  if (arrResult.length == 2) {
    arrResult.push(
      String(Math.max.apply(null, arrResult) - Math.min.apply(null, arrResult))
    );
  }
  return arrResult;
}

function concurrence(computerNum, userNum) {
  let numThereIs = [];
  let numInPlace = [];
  userNum.forEach((el, index) => {
    if (el == computerNum[index]) {
      numInPlace.push(el);
    }
    if (computerNum.includes(el)) {
      numThereIs.push(el);
    }
  });
  numInPlace.join(",");
  numThereIs = numThereIs.filter((el) => !numInPlace.includes(el));
  numThereIs.join(",");
  alert(
    `Совпавших цифр не на своих местах - ${numThereIs.length} (${numThereIs})`
  );
  alert(`Цифр на своих местах - ${numInPlace.length} (${numInPlace})`);
  return numInPlace;
}

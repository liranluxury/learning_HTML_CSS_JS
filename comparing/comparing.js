// const userHeight = prompt("Введите ваш рост в метрах");
// const userWeight = prompt("Введите ваш вес в килограмах");
// const userAge = prompt("Введите ваш возраст");

const userHeight = 12;
const userWeight = 21;
const userAge = 11;

const bodyWeightIndex = userWeight / (userHeight * userHeight);
let groupNumber;

if (userAge >= 18 && userAge <= 25) {
    groupNumber = 1;
} else if (userAge > 25 && userAge <= 46) {
    groupNumber = 2;
} else {
    groupNumber = 3;

}

if (groupNumber === 1) {
  if (bodyWeightIndex < 17.5) {
    alert("Ваш вес недостаточен, опасно для здоровья");
  } else if (bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5) {
    alert("Ваш вес слегка снижен, не опасно для здоровья");
  } else if (bodyWeightIndex >= 19.5 && bodyWeightIndex < 22.9) {
    alert("Ваш вес нормальный");
  }
} else if (groupNumber === 2) {
  if (bodyWeightIndex >= 23.0 && bodyWeightIndex < 27.4) {
    alert("Ваш вес излишний");
  } else if (bodyWeightIndex >= 27.5 && bodyWeightIndex < 29.9) {
    alert("Ожирение 1 степени");
  } else if (bodyWeightIndex >= 30.0 && bodyWeightIndex < 34.9) {
    alert("Ожирение 2 степени");
  } else if (bodyWeightIndex >= 35.0 && bodyWeightIndex < 39.9) {
    alert("Ожирение 3 степени");
  } else if (bodyWeightIndex < 18) {
    alert("Ваш вес недостаточен, опасно для здоровья");
  } else if (bodyWeightIndex >= 18 && bodyWeightIndex < 20) {
    alert("Ваш вес слегка снижен, не опасно для здоровья");
  } else if (bodyWeightIndex >= 20 && bodyWeightIndex < 259) {
    alert("Ваш вес нормальный");
  } else if (bodyWeightIndex >= 26.0 && bodyWeightIndex < 27.9) {
    alert("Ваш вес излишний");
  } else if (bodyWeightIndex >= 28 && bodyWeightIndex < 30.9) {
    alert("Ожирение 1 степени");
  } else if (bodyWeightIndex >= 31.0 && bodyWeightIndex < 35.9) {
    alert("Ожирение 2 степени");
  } else if (bodyWeightIndex >= 36.0 && bodyWeightIndex < 40.9) {
    alert("Ожирение 3 степени");
  }
} else if (groupNumber === 3) {
  alert("Нет данных для вашего возраста");
}

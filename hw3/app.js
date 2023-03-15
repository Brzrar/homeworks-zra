
// hw1

// var month = prompt("Введите свой месяц рождения (Пример: январь)").trim().toLowerCase()
// var day = prompt("Введите день своего рождения (Пример: 17)").trim()
//
// day = parseInt(day)
//
// if (month === 'январь' && day >= 21 && day <= 31 || month === 'февраль' && day <= 19){
//     console.log('Водолей')
// } else if (month === 'февраль' && day >=20 && day <= 28 || month === 'март' && day <= 20) {
//     console.log('Рыбы')
// }else if (month === 'март' && day >=21 && day <= 31 || month === 'апрель' && day <= 20) {
//     console.log('Овен')
// }else if (month === 'апрель' && day >=21 && day <= 30 || month === 'май' && day <= 21) {
//     console.log('Телец')
// }else if (month === 'май' && day >=22 && day <= 31 || month === 'июнь' && day <= 21) {
//     console.log('Близнецы')
// }else if (month === 'июнь' && day >=22 && day <= 30 || month === 'июль' && day <= 23) {
//     console.log('Рак')
// }else if (month === 'июль' && day >=24 && day <= 31 || month === 'август' && day <= 23) {
//     console.log('Лев')
// }else if (month === 'август' && day >=24 && day <= 31 || month === 'сентябрь' && day <= 23) {
//     console.log('Дева')
// }else if (month === 'сентябрь' && day >=24 && day <= 30 || month === 'октябрь' && day <= 23) {
//     console.log('Весы')
// }else if (month === 'октябрь' && day >=24 && day <= 31 || month === 'ноябрь' && day <= 22) {
//     console.log('Скорпион')
// }else if (month === 'ноябрь' && day >=23 && day <= 30 || month === 'декабрь' && day <= 21) {
//     console.log('Стрелец')
// }else if (month === 'декабрь' && day >=22 && day <= 31 || month === 'январь' && day <= 20) {
//     console.log('Козерог')
// } else {
//     alert('Введите корректно месяц или день своего рождения')
// }
//


// hw2

// var Starbucks = {
//     coffee: {
//         cappuccino: 'Тройной эспрессо с равными долями молока и молочной пены',
//         americano: 'Одинарный эспрессо с горячей водой"',
//         latte: 'Двойной эспрессо с молоком'
//     },
//
//     tea: {
//         black: 'Черный чай',
//         green: 'Зеленый чай',
//         herbal: 'Травяной чай'
//     }
// }
//
// var deducation = prompt("Что вы хотите заказать?")
//
// if (Starbucks.coffee[deducation]){
//     if (Starbucks.coffee !== false){
//         console.log(`Вы заказали ${deducation}. ${Starbucks.coffee[deducation]}`)
//     } else {
//         console.log(`Извините, ${deducation} нет в наличии, закажите что нибудь другое!`)
//     }
// } else if (Starbucks.tea[deducation]) {
//   console.log(`Вы заказали ${deducation}. ${Starbucks.tea[deducation]}`);
// } else {
//   console.log(`Извините, ${deducation} нет в наличии.`);
// }

// hw3

const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

const tagS = {};

tags.forEach(tag => {
  if (tagS[tag]) {
    tagS[tag]++;
  } else {
    tagS[tag] = 1;
  }
});

const sortTags = Object.entries(tagS).sort((a, b) => b[1] - a[1]);

const result = {};

sortTags.forEach(([tag, count]) => {
  result[tag] = count;
});

console.log(result);
console.log(sortTags)



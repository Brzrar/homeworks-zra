var Starbucks = {
  coffee: {
    americano: "Одинарный эспрессо с горячей водой",
    latte: "Двойной эспрессо с молоком",
    cappuccino: "Тройной эспрессо с равными долями молока и молочной пены",
    espresso: "Крепкий черный кофе"
  },
  tea: {
    black: "Черный чай",
    green: "Зеленый чай",
    herbal: "Травяной чай",
  }
}

var deduc = prompt("Что вы хотели заказать?").trim().toLowerCase();

if (Starbucks.coffee[deduc]) {
  if (Starbucks.coffee[deduc] !== false) {
    console.log(`Вы заказали ${deduc}. ${Starbucks.coffee[deduc]}`);
  } else {
    console.log(`Извините, ${deduc} нет в наличии.`);
  }
} else if (Starbucks.tea[deduc]) {
  console.log(`Вы заказали ${deduc}. ${Starbucks.tea[deduc]}`);
} else {
  console.log(`Извините, ${deduc} нет в наличии.`);
}

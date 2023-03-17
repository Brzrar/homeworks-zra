
// hw 4

// 1 вариант с циклом

var list = ["name", "John", "lastname", "Black", "age", "23"];
var objct = {};

for (let i = 0; i < list.length; i += 2) {
  const key = list[i];
  const value = list[i + 1];
  objct[key] = value;
}

console.log(objct);

// 2 вариант без цикла
// const list = [
//     ['name', 'John'] ,
//   ['lastname', 'Black'],
//   ['age', '23']
// ];
// const obj = Object.fromEntries(list);
// console.log(obj)



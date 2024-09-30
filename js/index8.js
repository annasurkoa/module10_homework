// Создаем произвольный Map
let myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

for (let [key, value] of myMap) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}

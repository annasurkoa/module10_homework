let arr = [1, 2, 3, 0, null, 'a', 4]; // Пример массива

let evenCount = 0, oddCount = 0, zeroCount = 0;

arr.forEach(item => {
    if (typeof item === 'number') {
        if (item === 0) zeroCount++;
        else if (item % 2 === 0) evenCount++;
        else oddCount++;
    }
});

console.log("Четные: " + evenCount);
console.log("Нечетные: " + oddCount);
console.log("Нули: " + zeroCount);

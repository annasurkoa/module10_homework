let input = "5";
let number = +input;

if (typeof number === 'number' && !isNaN(number)) {
    console.log(number % 2 === 0 ? "Чётное число" : "Нечётное число");  // Проверяем четность
} else {
    console.log("Упс, кажется, вы ошиблись");
}





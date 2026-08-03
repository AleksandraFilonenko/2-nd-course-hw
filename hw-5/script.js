// Задание 1
const minOfTwo = (a, b) => {
    if (a <= b) {
        return a;
    } else {
        return b;

    }
}

console.log(minOfTwo(20, 7));

// Задание 2
const number = (num) => {
    if (num % 2 === 0) {
        return 'число четное';
    } else {
        return 'число нечетное';
    }
}
console.log(number(10));   // выведет:'число четное'
console.log(number(5));   // выведет:'число нечетное'

// Задание 3.1
const square = (n) => {
    console.log(n * n);
}
square(5); //вызвала функцию

// Задание 3.2
const squareNum = (num) => {
    return num * num;
}
console.log(squareNum(7));

// Задание 4
const years = (y) => {
    if (y < 0) {
        return alert('Вы ввели неправильное значение');
    } else if (y >= 0 && y <= 12) {
        return alert('Привет, друг!');
    } else if (y >= 13) {
        return alert('Добро пожаловать!');
    }
}
let age = prompt('Сколько вам лет?');
years(Number(age));

// Задание 5
const numbers = (a, b) => {
    // Преобразуем в числа
    let num1 = Number(a);
    let num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return alert('Одно или оба значения не являются числом');
    } else
        return num1 * num2;
}
let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

let resultNumbers = numbers(firstNumber, secondNumber);
alert(resultNumbers);


// Задание 6
const namCube = (n) => {
    let numN = Number(n);


    if (isNaN(numN)) {
        return 'Переданный параметр не является числом';
    } else {
        let nResult = numN ** 3;
        return `${numN} в кубе равняется ${nResult}`;  // Возвращаем строку с подставленными значениями
    }
}
// Проверка для чисел от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(namCube(i));
}
console.log(namCube('fghgf'));

// Задание 7  Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius.Оба объекта должны иметь:Метод getArea,
//  который возвращает площадь круга, вычисляемую через радиус.Метод getPerimeter, который возвращает периметр окружности.

const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 12,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return2 * Math.PI * this.radius;
    }
};

console.log ('радиус = 5');
console.log('Площадь: ', circle1.getArea());
console.log ('Периметр: ', circle1.getPerimeter());

console.log('радиус = 12');
console.log('Площадь: ', circle2.getArea());
console.log ('Периметр: ', circle2.getPerimeter());

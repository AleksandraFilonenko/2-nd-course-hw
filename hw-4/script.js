// Задание 1.Выведите в консоль 2 раза слово «Привет».
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2. Выведите в консоль цифры от 1 до 5.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3.Выведите в консоль числа от 7 до 22.
for (let i = 7; i <= 22; i++) {
    console.log(i)
}

// Задание 4.
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(key + " - зарплата " + obj[key] + " долларов");
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}
console.log("Полученное число: " + n);
console.log("Количество итераций: " + num);

// Задание 6
let firstFriday = 3;
const daysInMonth = 31;

for (let date = firstFriday; date <= daysInMonth; date += 7) {
    console.log("Сегодня пятница, " + date + "-е число. Необходимо подготовить отчет.")
}

// Дополнительные задания
// Задание 1
let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}
console.log("результат вычитания: " + k);
console.log("количество итераций: " + iterations);

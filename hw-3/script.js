// Задание 1
let password = 'пароль';
let whatPassword = prompt('Введите пароль');
if (password == whatPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 10;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 115;
let e = 55;
if (d || e > 100) {
    console.log('Верно');
} else {
     console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

alert(Number(a + b));

// Задание 5
let monthNumber = 12;
if (monthNumber > 13) {
    console.log("Программа не выполняется: номер месяца больше 13");
} else {
    switch (monthNumber){
        case 12:
        case 1:
        case 2:
            console.log(`Месяц №${monthNumber} принадлежит к сезону «зима»`);
            break;
        case 3:
        case 4:
        case 5:
            console.log(`Месяц №${monthNumber} принадлежит к сезону "весна"`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`Месяц №${monthNumber} принадлежит к сезону «лето»`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`Месяц №${monthNumber} принадлежит к сезону «осень»`);
            break;
        default:
            console.log("Ошибка: номер месяца должен быть от 1 до 12");
    }
}
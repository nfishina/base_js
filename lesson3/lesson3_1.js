'use strict';
/**
 * Функция получает массив чисел и выводит инфомацию о том, чётное или нечётное число.
 * @param {Array} arr - массив чисел
 */
function getRemaindersOfDevision(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            console.log(`${arr[i]} - это ноль`);
        } else if ((arr[i] % 2) == 0) {
            console.log(`${arr[i]} – четное число`);
        } else if ((arr[i] % 2) !== 0) {
            console.log(`${arr[i]} – нечетное число`);
        }
    }
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getRemaindersOfDevision(numbers);
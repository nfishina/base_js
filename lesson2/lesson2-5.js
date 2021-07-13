"use strict"
/**
 * Функция складывает два полученных числа.
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns {number} результат сложения
 */
function Sum(num1, num2) {
    return num1 + num2;
}

/**
 * Функция находит разность двух полученных чисел.
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns {number} результат разности
 */
function Difference(num1, num2) {
    return num1 - num2;
}

/**
 * Функция выдаёт результат деления двух полученных чисел
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns {number} результат деления
 */
function Division(num1, num2) {
    return num1 / num2;
}

/**
 * Функция находит произведение двух полученных чисел.
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns {number} результат умножения
 */
function Multiplication(num1, num2) {
    return num1 * num2;
}
/**
 * Функция выполняет арифметическое действие из двух полученных чисел.
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation арифметическое действие
 * @returns {number} результат арифметического действия
 */
function MathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            return Sum(arg1, arg2);
        case "разность":
            return Difference(arg1, arg2);
        case "деление":
            return Division(arg1, arg2);
        case "произведение":
            return Multiplication(arg1, arg2);
    }
}

console.log(MathOperation(1, 2, "сложение"));
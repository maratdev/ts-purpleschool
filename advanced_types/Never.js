"use strict";
//Тип never используется, когда функция гарантированно ничего не возвращает. Например, если внутри функции есть бесконечный цикл:
function infiniteLoop() {
    while (true) {
        // Какая-то логика
    }
}
//Еще тип never используется, если функция выбрасывает исключение:
function stop(message) {
    throw new Error(message);
}

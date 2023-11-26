"use strict";
//Как объявлять и использовать generic-параметры
function LogMiddleware(data) {
    console.log(data);
    return data;
}
const resLog = LogMiddleware('Hello!');
//Указать явно что это массив
function GetSplitHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
GetSplitHalf([1, 2, 3]); // явно задаем number

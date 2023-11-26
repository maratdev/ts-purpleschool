"use strict";
// ---------------------Литеральные объекты
const dataSourceConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
};
function positionText(pos) {
    return 20;
}
positionText(0);
function fetchAuth(url, method) {
    return method;
}
let method = 'POST';
//const method = 'POST'; можно жестко превести к типу
//let method: 'POST' | 'GET' = 'POST' можно жестко задать к типу GET или POST
fetchAuth('s', method); // as каст к типу, просто вставка method выведит ошибку так как method тип string а нужен POST или GET

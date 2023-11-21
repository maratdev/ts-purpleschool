"use strict";
const url = 'https://dummyjson.com/user';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
})(HttpStatusCode || (HttpStatusCode = {}));
fetch(url, options)
    .then((res) => {
    if (res.status === HttpStatusCode.CONTINUE) {
        console.log('Данные еще загружаются....');
    }
    if (res.status === HttpStatusCode.NOT_FOUND) {
        throw new Error('Запрошенный ресурс не найден');
    }
    if (res.status === HttpStatusCode.OK) {
        return res.json();
    }
})
    .then((res) => console.log(res))
    .catch((err) => {
    if (err.message === HttpStatusCode.BAD_REQUEST) {
        throw new Error('Ошибка запроса на сервер');
    }
    else if (err.message === HttpStatusCode.BAD_GATEWAY) {
        throw new Error('Сервер получил недопустимый ответ');
    }
    else {
        throw new Error('Ошибка сервера');
    }
});
//# sourceMappingURL=api.js.map
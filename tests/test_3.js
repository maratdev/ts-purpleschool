"use strict";
let arr = [
    // Запрос в виде платежа
    {
        "sum": 10000,
        "from": 2,
        "to": 4
    },
    // Ответ
    {
        "status": "success",
        "data": {
            "databaseId": 567,
            "sum": 10000,
            "from": 2,
            "to": 4
        }
    },
    {
        "status": "failed",
        "data": {
            "errorMessage": "Недостаточно средств",
            "errorCode": 4
        }
    }
];
var statusPayment;
(function (statusPayment) {
    statusPayment["SUCCESS"] = "success";
    statusPayment["FAILED"] = "failed";
})(statusPayment || (statusPayment = {}));

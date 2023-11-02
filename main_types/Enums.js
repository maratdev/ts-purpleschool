"use strict";
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    statusCode[statusCode["FAILED"] = 3] = "FAILED";
})(statusCode || (statusCode = {}));
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
// 1 - успех
// 2 - в процессе
// 3 - отклонен
const resEnums = {
    message: 'Платеж успешен!',
    statusCode: statusCode.SUCCESS
};
if (resEnums.statusCode === statusCode.SUCCESS) {
    console.log(statusCode.IN_PROCESS);
}
function action(status) {
}
action(statusCode.SUCCESS);
action(1); // можно и так

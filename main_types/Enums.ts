enum statusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3
}
enum Roles {
    ADMIN,
    USER
}
// 1 - успех
// 2 - в процессе
// 3 - отклонен

const resEnums = {
    message: 'Платеж успешен!',
    statusCode: statusCode.SUCCESS
}

if(resEnums.statusCode === statusCode.SUCCESS) {
    console.log(statusCode.IN_PROCESS)
}

function action(status: statusCode){ // принимать Енамы statusCode

}
action(statusCode.SUCCESS)
action(1) // можно и так







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
]

enum statusPayment {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface IPayment{
  sum: number;
  from: number;
  to: number;
}

interface IDataSuccess extends IPayment{
  databaseId: number
}

interface IDataError{
  errorMessage: string
  errorCode: number
}

interface IResponseStatusSuccess {
  status: statusPayment.SUCCESS
  data: IDataSuccess
}

interface IResponseStatusError {
  status: statusPayment.FAILED
  data: IDataError
}









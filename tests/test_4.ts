interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type ResStatus = IResponseSuccess | IResponseFailed;

function isSuccess(res: ResStatus): res is IResponseSuccess {
  return res.status === PaymentStatus.Success;

}

function getIdForm(res: ResStatus): number{
  if (isSuccess(res)){
    return res.data.databaseId;
  }else {
    throw new Error(res.data.errorMessage)
  }
}


interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;

  handle(request: any): any
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request)
    }
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(request: any): any {
    console.log('AuthMiddleware')
    if (request.userId === 1) {
      return super.handle(request)
    }
    return {error: 'Вы не авторизованы!'}
  }
}


class ValidateMiddleware extends AbstractMiddleware {
  override handle(request: any): any {
    console.log('ValidateMiddleware')
    if (request.body){
      return super.handle(request)
    }
    return { error: 'Нет body!'}
  }
}

class ControllerMiddleware extends AbstractMiddleware {
  override handle(request: any): any {
    console.log('ControllerMiddleware')
    return { success: request}
  }
}

const controller = new  ControllerMiddleware();
const validate = new  ValidateMiddleware()
const auth = new  AuthMiddleware();

auth.next(validate).next(controller)

console.log(auth.handle({
  userId: 1,
  body: 'OK'
}))

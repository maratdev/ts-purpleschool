//Generic классы

class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data){
      this.data = data;
    }
    if (error){
      this.error = error;
    }
  }
}
const respClass = new Resp<string, number>('data');

class HTTPResp<F> extends Resp<string, number> {
  code: F;
  setCode(code: F){
    this.code = code;
  }
}

const resG = new HTTPResp();

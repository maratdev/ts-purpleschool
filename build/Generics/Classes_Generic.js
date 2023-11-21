"use strict";
//Generic классы
class Resp {
    data;
    error;
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const respClass = new Resp('data');
class HTTPResp extends Resp {
    code;
    setCode(code) {
        this.code = code;
    }
}
const resG = new HTTPResp();
//# sourceMappingURL=Classes_Generic.js.map
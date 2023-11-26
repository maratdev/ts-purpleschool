interface IA {
  a: number;
  b: string;
  e: string;
}

interface IB {

  c: boolean;
  b: string;
}

let aObj: IA = {a: 5, b: '', e: ''};
let bObj: IB = {c: true, b: ''};


function differenceInObj<T1 extends Record<string, any>, T2 extends Record<string, any>>(ObjA: T1, ObjB: T2): Omit<T1, keyof T1 & keyof T2> {
  const keysA = Object.keys(ObjA);
  const keysB = Object.keys(ObjB);
  const diffKeys = keysA.filter(item => !keysB.includes(item));
  return diffKeys.reduce((obj: Omit<T1, keyof T1 & keyof T2>, key: string) => {
      obj[key] = ObjA[key];
      return obj
    },
    {} as Omit<T1, keyof T1 & keyof T2>)
}

let resObj = differenceInObj(aObj, bObj);
console.log(resObj);

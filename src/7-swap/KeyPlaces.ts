function swapPropValues(obj: Record<string, number>, keyType: string): Record<number, string> {
  const res: Record<number, string> = {};

  for (const key in obj) {
    if (typeof key === keyType) {
      const value = obj[key];
      res[value] = key;
      delete obj[key];
    }
  }

  return {...res, ...obj};
}


const obj = {a: 1, b: 2, c: 5};
const resultSwap = swapPropValues(obj, 'number');
console.log(resultSwap);

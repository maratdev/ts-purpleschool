const UserObj = {
  name: 'Vasiliy',
  age: 9,
  skills: ['typescripts', 'javascript'],
}

function getDataObj<T, K extends keyof T>(obj: T, keys: K[]): object {
  const result: { [P in K]+?: T[P] } = {};

  keys.forEach((key) => {
    result[key] = obj[key];
  });

  return result
}


const resLogObj = getDataObj(UserObj, ['skills', 'age'])
console.log(resLogObj)

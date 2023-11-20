//Тип Union в TypeScript позволяет объединить несколько типов в один.
// Это полезно для описания значений, которые могут принадлежать к разным типам, но имеют общие свойства или поведение.

function logIdUnion(id: string | number | boolean) {
  if (typeof id === 'string') { // сужение типов
    console.log(id + '1')
  } else if (typeof id === 'number') {
    console.log(id + 1)
  } else {
    console.log(id)
  }
}
//----------------------Массивы
function logError(err: string | string[]) { // может быть иасовм или строкой
  if (Array.isArray(err)) {
    console.log(err)
  } else {
    console.error(err)
  }
}

//---------------------- Объекты

//Чтобы принять такой объект в функцию как параметр, нужно указать его структуру в описании функции:
function logObj(obj: { a: number } | { b: number }) { // Свойства в описании типа разделяются через запятую (,)
  if ('a' in obj){
    console.log(obj.a)
  }else {
    console.log(obj.b)
  }
}
logObj({a: 1,  b: 2000 });

function doSomething(user: { firstName: string, pointsCount: number}) {
  if ('firstName' in user){
    console.log(user.firstName)
  }
  if ('pointsCount' in user){
    console.log(user.pointsCount + 500)
  }
}

doSomething({ firstName: 'Alice', pointsCount: 2000 });
// Так нельзя
//! doSomething({ firstName: 'Bob' });
// И так тоже
//! doSomething({ firstName: 'Bob', pointsCount: 1800, key: 'another' });

function logMultipleIds(a: string | number, b: string | boolean) {
  if (typeof a === typeof b){ //сравниваем типы.
    console.log(a.toString);
  }else {
    console.log(a)
  }
}
logMultipleIds(10,true)

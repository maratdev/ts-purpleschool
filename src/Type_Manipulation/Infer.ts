//Infer в Typescript используется для определения типа данных, который может быть выведен из контекста или аргумента функции.
// Это позволяет определять типы переменных и параметров на основе фактических значений, передаваемых в функцию или используемых в контексте.

function runTransaction(transaction: {
  fromTo: [string, string]
}){
  console.log(transaction)
}


const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ['1','2']
}

runTransaction(transaction)

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never // Если T extends (first: infer First, ...args: any[]) то мы должны вернуть First иначе never; infer - псевдо объявляет тип(вытаскивает тип)

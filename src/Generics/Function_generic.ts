//Как объявлять и использовать generic-параметры
function LogMiddleware<T>(data: T): T {
  console.log(data)
  return data;
}


const resLog = LogMiddleware<string>('Hello!')


//Указать явно что это массив
function GetSplitHalf<T>(data: T[]): T[] {
  const l = data.length / 2;
  return data.splice(0, l)
}

GetSplitHalf<number>([1, 2, 3]) // явно задаем number

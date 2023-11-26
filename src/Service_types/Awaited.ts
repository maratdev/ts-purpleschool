//Тип Awaited используется в TypeScript для определения типа значения, которое ожидается (будет возвращено) асинхронной функцией.
type A = Awaited<Promise<string>> // Рекурсивно разворачивает «ожидаемый тип» типа.

interface IMenu {
  name: string
  url: string
}

async function getMenu(): Promise<IMenu[]>{
  return [{name: 'Аналитика', url: 'site.ru'}]
}

type R = Awaited<ReturnType<typeof getMenu>> // вытащили IMenu

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
  return [await x]
}

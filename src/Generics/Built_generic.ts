// встроенные Generic
const numGeneric: Array<number> = [1, 2, 3]

async function testPromise() {
  const a = await new Promise<number>((res, reject) => {
    res(1)
  })
}

const checkGeneric: Record<string, boolean> ={ // Record ключ будет string значение будет boolean
  drive: true,
  kpp: false
}

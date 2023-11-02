//TypeScript поддерживает литеральный тип: string, boolean, number и BigInt
// *переменной не может быть присвоено ничего, кроме указанного значения:
type Ok = 'ok'; //! let test: Ok = 'test';  Error: Type '"string"' is not assignable to type '"test"'.
type One = 1;
type False = false;
type BigN = 100n;


//--------------Объединение литеральных типов

type OrderStatus = 'Created' | 'Paid' | 'Shipped' | 'Delivered';

//Также литеральные типы могут комбинироваться с любыми другими типами. Так мы можем получить ограничение, под которое попадают все числа и false:
type NumberFalse = number | false;

// ---------------------Литеральные объекты
const dataSourceConfig = {
  type: 'postgres', // может также быть mysql
  host: 'localhost',
  port: 5432,
};

type DataSourceOption = {
  type: 'postgres' | 'mysql';
  host: string;
  port: number;
}

function positionText(pos: -1 | 0 | 1): 10 | 20 {  //* может принимать пргумент только -1 | 0 | 1 результат вывода должен быть только 10 или 20
  return 20
}
positionText(0)

function fetchAuth(url: string, method: 'POST' | 'GET'){
  return method
}

let method = 'POST'

//const method = 'POST'; можно жестко превести к типу
//let method: 'POST' | 'GET' = 'POST' можно жестко задать к типу GET или POST
fetchAuth('s', method as 'POST') // as каст к типу, просто вставка method выведит ошибку так как method тип string а нужен POST или GET




















class UserClassConstr {
  name: string;
  age: number;

  constructor(); //конструктор вызова перезагрузка конструкторв
  constructor(name: string); //конструктор вызова 4
  constructor(age: number); //конструктор вызова 4
  constructor(name: string, age: number); //конструктор вызова 3

  constructor(nameOrAge?: string | number, age?: number) { // конструктор имлементации(реализации)
    if (typeof nameOrAge === 'string'){
      this.name = nameOrAge;
    }else if (typeof nameOrAge === 'number'){
      this.age = nameOrAge;
    }
    if (typeof age === 'number'){
      this.age = age;
    }
  }

}

const userClass2 = new UserClassConstr('Alex');
const userClass3 = new UserClassConstr();
const userClass4 = new UserClassConstr(33);
const userClass5 = new UserClassConstr('Alex',33);

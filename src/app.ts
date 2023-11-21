// ------------------------------------- Переменные ------------------------------- //
let revenue: number = 1000;
let bonus: number = 500;
let c: string = 'sdf';
let d: boolean = true;

let res: number = revenue + bonus;
console.log(res);

// ------------------------------------- Функции------------------------------- //
function getFullName(firstName: string, surName: string): string {
    return `${firstName} ${surName}`
}
// ------------------------------------- Стрелочные функции------------------------------- //

const getFullNameArrow = (firstName: string, surName: string): string => {
    return `${firstName} ${surName}`
}


// ------------------------------------- Объекты ------------------------------- //
function getFullNameObj(userEntity: { firstname?: string; surname?: string; city?: string; age?: number; firstName?: any; surName?: any; }): string {
    return `${userEntity.firstName} ${userEntity.surName}`;
}

const user= {
    firstname: 'Иван',
    surname: 'Иванов',
    city: 'Москва',
    age: 33,
    skills: {
        dev: true,
        devops: true,
    }
};

console.log(getFullNameObj(user))































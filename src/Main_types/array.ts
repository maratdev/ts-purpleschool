//Определение массива
const skills :string[] = ['Dev', 'DevOps', 'Testing'];

for(const skill of skills){
    console.log(skill.toLowerCase())
}

const skillRes = skills.filter((s: string)=> s !== 'DevOps')
    .map(s=> s + '! ')
    .reduce((a, b) => a  + b)

console.log(skillRes)


//Определение массива
const fruit: string[] = ['banana', 'mango', 'apple'];

function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}

toUpperArray(fruit)

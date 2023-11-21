type sort = 'asc' | 'desc'

interface IObjTypes{
  id: number
}

function sortObjectsById <T extends IObjTypes> (objects: T[], sortOrder: sort = "asc"): T[] {
  return objects.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.id - b.id
    } else {
      return b.id - a.id;
    }
  });
}

const test9Data = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Alisa'},
]

const resData = sortObjectsById(test9Data)
console.log(resData)

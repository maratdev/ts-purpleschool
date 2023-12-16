interface IndexedRoles {
  name: string
}

interface IPermission {
  endDate: Date
}

interface IndexedUser {
  name: string
  roles: IndexedRoles[]
  permission: IPermission
}


const userIndex: IndexedUser = {
  name: 'Alex',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

const nameUser = userIndex['name']; // получить name
const roleNamesIndex = 'roles';

// получить тип ролей рользователя
type rolesIndexType = IndexedUser['roles'] // взяли из IndexedUser тип roles
type rolesIndexType2 = IndexedUser[typeof roleNamesIndex] // взяли из roleNamesIndex тип roles


type roleIndexType = IndexedUser['roles'][number] // мы хотим получить из массива тип
type dateIndexType = IndexedUser['permission']['endDate'] // получаем доступ к endDate

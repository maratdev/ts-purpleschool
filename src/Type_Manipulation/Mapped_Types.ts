//Mapped types (отображение типов) в TypeScript позволяют создавать новые типы на основе существующих, применяя к каждому члену одного типа некоторое преобразование.

type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  customers: Modifier
  projects: Modifier
  adminPanel: Modifier
}

type ModifierToAccess<T> = {
  [Property in keyof T]: boolean
}

type UserAccess = ModifierToAccess<UserRoles> // будет атоматически копировать все методы которые есть в UserRoles

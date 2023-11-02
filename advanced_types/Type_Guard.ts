//Защитники Типа

function isAdmin(user: ISectionUser | ISectionAdmin): user is ISectionAdmin{
  return 'role' in user
}

function isAdminAlternative(user: ISectionUser | ISectionAdmin): user is ISectionAdmin{
  return (user as ISectionAdmin).role !== undefined;
}

function setRoleZero(user: ISectionUser | ISectionAdmin) {
  if (isAdmin(user)){
    user.role = 0;
  }else {
    throw new Error('Пользователь не админ!')
  }
}

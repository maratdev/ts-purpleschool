class SetUser {
  _login: string;
  password: string;
  createAt: Date;

  set login(l: string | number) {  // если не указать тип то будет string
    this._login = 'user-' + l
    this.createAt = new Date();
  }

  get login() {
    return this._login
  }

  getPassword(p: string) {  //! Асинхроные функции нужно писать только в методах !!
    fetch("products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }
}

const setUsers = new SetUser();
setUsers.login = 'myLogin'
console.log(setUsers)
console.log(setUsers.login)

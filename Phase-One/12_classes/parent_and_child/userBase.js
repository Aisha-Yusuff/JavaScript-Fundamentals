class User {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  getIntroduction() {
    this._name.forEach((name) => {
      console.log(`Hi, my name is ${name}`);
    });
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

class UserBase extends User {
  constructor(name, users) {
    super(name);
    this._users = name;
  }

  count(name) {
    return this._users.length;
  }
}
const userBase = new UserBase(["Uma", "Josh", "Ollie"]);

console.log(userBase.getName());

console.log(userBase.getIntroduction());

console.log(userBase.count());

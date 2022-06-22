class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => {
      return user.name;
    });
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction();

      // This can also be done with forEach method
      // this.users.forEach((user) => {
      //   console.log(`Hi, my name is ${user.name}`);
    });
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

const userBase = new UserBase(users);

console.log(userBase.getNames());

console.log(userBase.getIntroductions());

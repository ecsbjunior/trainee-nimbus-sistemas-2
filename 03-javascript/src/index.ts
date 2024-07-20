enum UserType {
  ADMIN,
  NORMAL,
};

class User {
  username: string;
  password: string;
  age: number;
  type: UserType;

  constructor(username: string, password: string, age: number, type: UserType) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.type = type;
  }

  format() {
    return `User {\n` +
    ` Username: ${this.username}\n` +
    ` Password: ${this.password}\n` +
    ` Age: ${this.age}\n` +
    ` Type: ${UserType[this.type]}\n` +
    `}\n`;
  }
}

const john = new User('john', '123', 18, UserType.ADMIN);

console.log(john.format());

class User {
  constructor(username, password, age, type) {
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
    ` Type: ${this.type}\n` +
    `}\n`;
  }
}

const john = new User(18, '123', 'john', 'ADMIN');

// john.print = () => { console.log('print') }

// john.print();

console.log(john.format());

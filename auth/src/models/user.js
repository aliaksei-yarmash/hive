const usersData = require('../data/users');

class User {
  constructor ({ username, password }) {
    this.username = username;
    this.password = password;
  }

  async checkPassword (password) {
    return this.password === password
  }

  static async get (username) {
    const user = usersData.find(user => user.username === username);
    return user ? new User(user) : null;
  }
};

module.exports = User;

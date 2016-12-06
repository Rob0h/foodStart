var User = require('./users.js');

module.exports = {

  addUser: function(user) {
    var newUser = new User({
      username: user.username,
      // Password being saved as plain text- Opportunity for Improvement in the future
      password: user.password,
    });
    return newUser.save()
    .then(function(res) {
      console.log('New User added');
    });
  }
}
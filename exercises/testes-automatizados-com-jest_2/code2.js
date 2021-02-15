const users = {
    4 : { name: 'Mark' },
    5 : { name: 'Paul' }
    };
    //comeco
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          };
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    };
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    };

    module.exports = { users, findUserById , getUserName }
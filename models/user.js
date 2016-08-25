var mysql = require('mysql');
var async = require('async');
var dbPool = require('../models/common').dbPool;

function findByEmail(email, callback) {
  if (email !== "gildong.hong@example.com") {
    callback(null, null);
  } else {
    callback(null, {
      id: 1,
      name: "홍길동",
      email: "gildong.hong@example.com",
      password: "33275a8aa48ea918bd53a9181aa975f15ab0d0645398f5918a006d08675c1cb27d5c645dbd084eee56e675e25ba4019f2ecea37ca9e2995b49fcb12c096a032e"
    });
  }
}

function verifyPassword(password, hashPassword, callback) {
  var sql = 'SELECT SHA2(?, 512) password';
  dbPool.getConnection(function(err, dbConn){
    if (err) {
      return callback(err);
    }
    dbConn.query(sql, [password], function(err, results) {
      dbConn.release();
      if (err) {
        return callback(err);
      }
      if (results[0].password !== hashPassword) {
        return callback(null, false)
      }
      callback(null, true);
    });
  });
}

function findUser(userId, callback) {
  if (userId === 1) {
    callback(null, {
      id: 1,
      name: "홍길동",
      email: "gildong.hong@example.com"
    });
  } else {
    callback(null, {
      id: 2,
      name: "",
      email: "",
      facebookid: ""
    });
  }
}

function findOrCreate(profile, callback) {
  return callback(null, {
    id: 2,
    name: profile.displayName,
    email: profile.emails[0].value,
    facebookid: profile.id
  });
}

function registerUser(newUser, callback) {

}

function updateUser(user, callback) {

}

function listUsers(pageNo, rowCount, callback) {

}

module.exports.findUser = findUser;
module.exports.registerUser = registerUser;
module.exports.updateUser = updateUser;
module.exports.listUsers = listUsers;
module.exports.findByEmail = findByEmail;
module.exports.verifyPassword = verifyPassword;
module.exports.findOrCreate = findOrCreate;

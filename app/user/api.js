'use strict'

const config = require('../config')
// const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}

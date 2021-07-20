'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully.')
  console.log('Sign up successful. Data is: ', data)
  $('form').trigger('reset')
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed.')
  console.error('Sign up failed. Error is: ', error.status)
}
const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  store.user = data.user
  console.log('Sign in successful. Data is: ', data)
  $('form').trigger('reset')
  $('#new-game').show()
  $('#sign-out').show()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed.')
  console.error('Sign in failed. Error is: ', error.status)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully.')
  $('form').trigger('reset')
  console.log('Sign out successfully and nothing was returned.')
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed.')
  console.error('Sign out failed. Error is: ', error.status)
}

const onCreateGameSuccess = function (data) {
// $('#message').text('Success.')
  store.game = data.game
  console.log('Data is', data.game)
  $('#game-board').show('slow')
}

const onCreateGameFailure = function (error) {
  $('#message').text('Unable to start new game.')
  console.log('Error is', error.status)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}

'use strict'
const store = require('../store')
// const { onRestartGame } = require('./events')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  console.log('Sign up successful. Data is: ', data)
  $('form').trigger('reset')
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed.')
  console.error('Sign up failed. Error is: ', error.status)
}

const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  store.user = data.user
  console.log('Sign in successful. Data is: ', data)
  $('form').trigger('reset')
  $('#new-game').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out-message').text('')
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed.')
  console.error('Sign in failed. Error is: ', error.status)
}

const onSignOutSuccess = function () {
  $('#sign-out-message').text('Log out successful. Come back soon!')
  $('form').trigger('reset')
  console.log('Sign out successfully and nothing was returned.')
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#game-board').hide()
  $('#update').text('')
}

const onSignOutFailure = function (error) {
  $('#sign-out-message').text('Sign out failed.')
  console.error('Sign out failed. Error is: ', error.status)
}

const onCreateGameSuccess = function (data) {
// $('#message').text('Success.')
  store.game = data.game
  console.log('Data is', data.game)
  $('#game-board').show('slow')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#message').hide()
}

const onCreateGameFailure = function (error) {
  $('#create-game-failure').text('Unable to start new game. Try signing in!')
  console.log('Error is', error.status)
}

const onUpdateGameSuccess = function (data) {
  // store.game = data.game
}

const onUpdateGameFailure = function (error) {
  $('#update').text('Unable to update game.')
  console.log('Unable to update game. Error is: ', error.status)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}

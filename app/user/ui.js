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
  console.log('Sign in successful. Data is: ', data)
  $('form').trigger('reset')
  store.user = data.user
  $('#new-game').show('slow')
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed.')
  console.error('Sign in failed. Error is: ', error.status)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully.')
  console.log('Sign out successfully and nothing was returned.')
  $('form').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed.')
  console.error('Sign out failed. Error is: ', error.status)
}

const onCreateGameSuccess = function () {
  $('#message').text('Success. Testing it works')
}

const onCreateGameFailure = function () {
  $('#message').text('Failure. Testing it works')
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

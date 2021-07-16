'use strict'

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully.')
  console.log('Sign up successful. Data is: ', data)
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed.')
  console.log('Sign up failed. Error is: ', error)
}
const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  console.log('Sign in successful. Data is: ', data)
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed.')
  console.log('Sign in failed. Error is: ', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}

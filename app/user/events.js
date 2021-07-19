'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const { apiUrl } = require('../config')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS TOO!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS ALSO!')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = function () {
  console.log('Game created')

  api.signOut()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame
}

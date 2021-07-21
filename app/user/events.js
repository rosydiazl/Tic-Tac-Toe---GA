'use strict'

const getFormFields = require('../../lib/get-form-fields')
const store = require('../store')
// const  { apiUrl }  = require('../config')

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

const onCreateGame = function (event) {
  event.preventDefault()
  // console.log('Game created')

  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'X'

const onSpaceClick = function (event) {
  const target = event.target // This variable is an event listener
  const cellIndex = target.dataset.cellIndex // The cellIndex variable is pulling the data from HTML for my game board.

  if (store.gameBoard[cellIndex] == null) { // If my board is empty (that is, if all cellIndex are empty)
    const box = $(event.target)
    box.css('background', 'transparent').text(currentPlayer)
    // console.log('Current player is: ', currentPlayer)
    // console.log('Store of gameBoard is: ', store.gameBoard[cellIndex])
    store.gameBoard[cellIndex] = currentPlayer
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  }
  console.log('Cell index is: ', cellIndex)
  console.log(store.gameBoard)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onSpaceClick
}

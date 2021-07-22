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
  store.game = null
  const data = getFormFields(this)
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let player = 'X'
let gameOver = false

const onUpdateGame = function (event) {
  // Make sure a user can only put X or O on an empty cell.
  const target = event.target // This variable is an event listener
  const cellIndex = target.dataset.cellIndex // The cellIndex variable is pulling the data from HTML for my game board.

  if (store.game.cells[cellIndex] === '' && gameOver === false) {
    // If my board is empty (that is, if all cellIndex are empty)
    const box = $(event.target)
    box.css('background', 'transparent').text(player)

    // console.log('Current player is: ', currentPlayer)
    // console.log('Store of gameBoard is: ', store.game.cells[cellIndex])
    store.game.cells[cellIndex] = player
    player = player === 'O' ? 'X' : 'O'

    store.game.player = player
    const checkWinner = checkWin()
    gameOver = checkWinner[0]
    const winner = checkWinner[1]
    // Check returns below
    // console.log('Game over is: ', gameOver)
    if (gameOver && winner !== 'tie') {
      $('#update').text(checkWinner[1] + ' wins!')
    } else if (gameOver && winner === 'tie') {
      $('#update').text('It is a tie')
    }

    api.updateGame(cellIndex, gameOver)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  }

  // console.log('Cell index is: ', cellIndex)
  console.log('Game data is', store.game)
  console.log('Winner is: ', checkWin())
}

// Conditions on which the game ends: 3 Xs or Os in a row.
// 9 ways the game ends: 3 vertical, horizontal and diagonal Xs and Os & tie.

const checkWin = function () {
  let gameOver = false
  let winner = ''
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    gameOver = true
    winner = store.game.cells[0]
    return [gameOver, winner]
  } else if (
    store.game.cells[3] !== '' &&
    store.game.cells[3] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[5]
  ) {
    gameOver = true
    winner = store.game.cells[3]
    return [gameOver, winner]
  } else if (
    store.game.cells[6] !== '' &&
    store.game.cells[6] === store.game.cells[7] &&
    store.game.cells[7] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[6]
    return [gameOver, winner]
  } else if (
    store.game.cells[0] !== '' &&
    store.game.cells[0] === store.game.cells[3] &&
    store.game.cells[3] === store.game.cells[6]
  ) {
    gameOver = true
    winner = store.game.cells[0]
    return [gameOver, winner]
  } else if (
    store.game.cells[1] !== '' &&
    store.game.cells[1] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[7]
  ) {
    gameOver = true
    winner = store.game.cells[1]
    return [gameOver, winner]
  } else if (
    store.game.cells[2] !== '' &&
    store.game.cells[2] === store.game.cells[5] &&
    store.game.cells[5] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[2]
    return [gameOver, winner]
  } else if (
    store.game.cells[0] !== '' &&
    store.game.cells[0] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[0]
    return [gameOver, winner]
  } else if (
    store.game.cells[2] !== '' &&
    store.game.cells[2] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[6]
  ) {
    gameOver = true
    winner = store.game.cells[2]
    return [gameOver, winner]
  } else if (
    store.game.cells[0] !== '' &&
 store.game.cells[1] !== '' &&
 store.game.cells[2] !== '' &&
 store.game.cells[3] !== '' &&
 store.game.cells[4] !== '' &&
 store.game.cells[5] !== '' &&
 store.game.cells[6] !== '' &&
 store.game.cells[7] !== '' &&
 store.game.cells[8] !== ''
  ) {
    gameOver = true
    winner = 'tie'
    return [gameOver, winner]
  }
  return [gameOver, winner]
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  checkWin
}

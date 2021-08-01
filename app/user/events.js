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

let player = 'X'
let gameOver = false

const onUpdateGame = function (event) {
  // Event listener
  const target = event.target
  // The cellIndex variable is pulling the board data from HTML
  const cellIndex = target.dataset.cellIndex

  // Check if the cell that is clicked is empty & check if the game is not over
  if (store.game.cells[cellIndex] === '' && gameOver === false) {
    // Decide the box the user clicks on (event listener)
    const box = $(event.target)
    // Display X or O on the game board.
    box.css('background', 'transparent').text(player)

    // Change the value of the cells to the value of player because the player clicked on them.
    store.game.cells[cellIndex] = player
    // Alternate player between X and O after initial X
    player = player === 'O' ? 'X' : 'O'

    store.game.player = player

    // Return an array that indicates whether the game is over and the winner
    const checkWinner = checkWin()
    // Return weather the game is over
    gameOver = checkWinner[0]
    // Return the winner
    const winner = checkWinner[1]
    // If the game is over and it isn't a tie, display who won. If the game is over and it is a tie, display that it's a tie.
    if (gameOver && winner !== 'tie') {
      $('#update').text(checkWinner[1] + ' wins!')
    } else if (gameOver && winner === 'tie') {
      $('#update').text('It is a tie')
    }

    api.updateGame(cellIndex, gameOver)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  }
}

const onRestartGame = function (event) {
  // start player as 'X'
  player = 'X'
  // start game as not over
  gameOver = false

  // event listener. Pull cells from HTML
  const target = document.querySelectorAll('.box')
  target.forEach((el) => el)
  // const cellIndex = target.dataset.cellIndex

  // store.game.cells[cellIndex] = ''

  // event listener for clicking the box
  const box = $(target)
  // empties the game board after game is over
  box.css('background', 'transparent').text('')

  $('#update').text('')
}

// Conditions on which the game ends: 3 Xs or Os in a row.
// 9 ways the game ends: 3 vertical, horizontal and diagonal Xs and Os & tie.
const checkWin = function () {
  let gameOver = false
  let winner = ''
  // Check if there is a winner in the first horizontal line.
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    gameOver = true
    winner = store.game.cells[0]
    return [gameOver, winner]
    // Check if there is a winner in the second horizontal line.
  } else if (
    store.game.cells[3] !== '' &&
    store.game.cells[3] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[5]
  ) {
    gameOver = true
    winner = store.game.cells[3]
    return [gameOver, winner]
    // Check if there is a winner in the 3rd horizontal line.
  } else if (
    store.game.cells[6] !== '' &&
    store.game.cells[6] === store.game.cells[7] &&
    store.game.cells[7] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[6]
    return [gameOver, winner]
    // Check if there is a winner in the first vertical line
  } else if (
    store.game.cells[0] !== '' &&
    store.game.cells[0] === store.game.cells[3] &&
    store.game.cells[3] === store.game.cells[6]
  ) {
    gameOver = true
    winner = store.game.cells[0]
    return [gameOver, winner]
    // Check if there is a winner in the second vertical line
  } else if (
    store.game.cells[1] !== '' &&
    store.game.cells[1] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[7]
  ) {
    gameOver = true
    winner = store.game.cells[1]
    return [gameOver, winner]
    // Check if there is a winner in the third vertical line
  } else if (
    store.game.cells[2] !== '' &&
    store.game.cells[2] === store.game.cells[5] &&
    store.game.cells[5] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[2]
    return [gameOver, winner]
    // Check if there is a winner diagonally
  } else if (
    store.game.cells[0] !== '' &&
    store.game.cells[0] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[8]
  ) {
    gameOver = true
    winner = store.game.cells[0]
    // Check if there is a winner diagonally
    return [gameOver, winner]
  } else if (
    store.game.cells[2] !== '' &&
    store.game.cells[2] === store.game.cells[4] &&
    store.game.cells[4] === store.game.cells[6]
  ) {
    gameOver = true
    winner = store.game.cells[2]
    return [gameOver, winner]
    // Check if it is a tie
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
  checkWin,
  onRestartGame
}

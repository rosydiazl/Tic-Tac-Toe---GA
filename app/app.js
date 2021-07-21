// use require with a reference to bundle the file and use it in this file
const store = require('./store')
const userEvents = require('./user/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').hide()
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#new-game').hide()
  $('#new-game').on('click', userEvents.onCreateGame)
  $('#game-board').hide()
  $('#game-board').on('click')
  $('.box').on('click', userEvents.onSpaceClick)
  // let currentPlayer = 'X'
  store.gameBoard = []
})

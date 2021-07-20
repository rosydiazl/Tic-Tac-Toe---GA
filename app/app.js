// use require with a reference to bundle the file and use it in this file
const userEvents = require('./user/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#new-game').hide()
  $('#new-game').on('click', userEvents.onCreateGame)
  $('#game-board').hide()
  $('#sign-out').hide()
  $('#game-board').on('click')
  let currentPlayer = 'X'

  const onClickBox = (event) => {
    console.log('Clicked!')

    const box = $(event.target)

    box.css('background', 'transparent').text(currentPlayer)

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  }
  $('.box').on('click', onClickBox)
})

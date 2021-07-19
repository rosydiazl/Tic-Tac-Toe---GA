#!/bin/bash

# TOKEN="2f759c81baa5507b5b8996ff93fc7a94" sh curl-scripts/create-game.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}' \

echo

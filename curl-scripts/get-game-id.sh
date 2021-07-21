#!/bin/bash

# TOKEN="2f759c81baa5507b5b8996ff93fc7a94" sh curl-scripts/cget-game-id.sh

curl  "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo

#!/bin/bash

# $ TOKEN="a9d32bd156b5ea2d44e45351f2fbf75e" ID="60f8b44e0bbb2c001706d38a" INDEX="0" VALUE="x" OVER="false" sh curl-scripts/update-game.sh


curl  "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
     "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
  }'

echo

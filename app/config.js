let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url',
  development: 'https://git.generalassemb.ly/ga-wdi-boston/game-project-api#api-url'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

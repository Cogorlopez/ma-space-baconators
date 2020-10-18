module.exports = {
  APP_NAME: 'ma-space-baconators',
  BASE_PATH: '/',
  BASE_FUNCTIONS_URL: 'https://us-central1-space-baconators.cloudfunctions.net',

  FUNCTIONS: {
    HELLO_WORLD: '/helloworld',
    POST_SONG_LIST: '/postSongList',
    GET_SONGS_LIST: '/getAllSongs',
    GET_SONG: '/getSong',
    GET_SHOWS_LIST: '/getAllShows'
  },

  SERVER: {
    HTTP_PORT: 80,
    HTTPS_PORT: 443
  }
}

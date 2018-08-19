const queryString = require('query-string');
const env = require('./config/env.json')

exports.userLogin = env.SPOTIFY_AUTH_URL + 
    queryString.stringify({        
        response_type: 'code',
        client_id: env.SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri: env.REDIRECT_URI,
    });
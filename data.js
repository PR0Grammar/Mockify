const axios = require('axios');

exports.getUserProfile = async (token) => {
    return axios.get('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        return Promise.resolve(response.data)
    })
    .catch(err => console.log(err));
}

exports.getUserRecentlyPlayed = async (token) => {
    return axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params:{
            limit: 50,
        }
    })
    .then(response => {
        return Promise.resolve(response.data)
    })
    .catch(err => console.log(err));
}

exports.getUserTopTracks = async (token) => {
    return axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            limit: 5,
            offset: 3,
        }
    })
    .then(response => {
        return Promise.resolve(response.data)
    })
    .catch(err => console.log(err));
}

exports.getUserTopArtists = async (token) => {
    return axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            limit: 5,
            offset: 3,
        }
    })
    .then(response => {
        return Promise.resolve(response.data)
    })
    .catch(err => console.log(err));
}

exports.getArtistInfoById = async (token, artistId) => {
    return axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        return Promise.resolve(response.data);
    })
    .catch(err => console.log(err));
}

exports.getAlbumInfoById = async (token, albumId) => {
    return axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        return Promise.resolve(response.data)
    })
}

exports.getBrowseCategories = async (token) => {
    return axios.get('https://api.spotify.com/v1/browse/categories', {
        headers:{
            'Authorization': `Bearer ${token}`
        }, 
        params:{
            limit:50
        }
    })
    .then(response => {
        return Promise.resolve(response.data);
    })
    .catch(err => console.log(err));
}
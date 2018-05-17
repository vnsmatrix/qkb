let config;

if(process.env.NODE_ENV == 'production') {
    config = process.env;

} else {
    config = require('./secrets')
}

const request = require('./request');

module.exports.getTweets = function(screenName) {
    return getToken().then(function(token) {
        if (!Array.isArray(screenName)) {
            return getTweets(token, screenName);
        }
        return Promise.all(
            screenName.map(screenName => getTweets(token, screenName))
        ).then(arrays => {
            let merged = [];
            while (arrays.length) {
                merged.push.apply(merged, arrays.pop());
            }
            return merged.sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
        });
    }).catch(e => {
        console.log("error in getTweets from twApi", e);
    })
}

function getToken() {
    var authorization = `${config.consumerKey}:${config.consumerSecret}`;
    return request({
        method: 'POST',
        host: 'api.twitter.com',
        path: '/oauth2/token',
        auth: 'Basic ' + Buffer(authorization).toString('base64'),
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        body: 'grant_type=client_credentials'
    }).then(function(data) {
        console.log("data from getToken", data);
        return JSON.parse(data).access_token;
    }).catch(e => {
        console.log("error getToken", e);
    })
};

function getTweets(token, screenName) {
    return request({
        host: 'api.twitter.com',
        path: `/1.1/statuses/user_timeline.json?screen_name=${screenName || 'QueerArtBerlin'}`,
        auth: 'Bearer ' + token
    }).then(function(data) {
       return JSON.parse(data);
    }).catch(e => {
        console.log("error in getTweets", e);
    })
};

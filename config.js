const twitter = require('twitter-lite');

exports.newClient = function (subdomain = 'api') {
    return new twitter({
        subdomain,
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });
}

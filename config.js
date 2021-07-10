const twitter = require('twitter-lite');

exports.newClient = function (subdomain = 'api') {
    return new twitter({
        subdomain,
        consumer_key: 'FvqMKr3OevhEfLEPD0X2np1G7',
        consumer_secret: 'JISatyLgbqbkqKFHS5ISRzRG8ddHIccL19uHPGHChYADvLR3p9',
        access_token_key: '943061337818779650-WlYaPqLp5NGvocnhClwhQrcKobEWlOM',
        access_token_secret: 'Gs0lkBLoGXaPLv4E293E1tTVvLkuYiIXWDznzy1722APr'
    });
}
const config = require('./config');
const twitter = require('twitter-lite');
const client = new twitter(config);

client.post('statuses/update', { status: 'Hello world!' }).then(result => {
    console.log('You successfully tweeted this : "' + result.text + '"');
}).catch(console.error);
const fs = require('fs');
const path = require('path');
const config = require('./config');
const apiClient = config.newClient();
const uploadClient = config.newClient('upload');

const mediaFile = fs.readFileSync(path.join(__dirname, 'hello_world.png'));
const base64image = Buffer.from(mediaFile).toString('base64');

uploadClient.post('media/upload', { media_data: base64image }).then(media => {
    console.log('You successfully uploaded media');

    var media_id = media.media_id_string;

    apiClient.post('statuses/update', { status: 'Hello world!', media_ids: media_id }).then(tweet => {
        console.log('Your image tweet is posted successfully');
    }).catch(console.error);

}).catch(console.error);
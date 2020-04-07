const rp = require('request-promise');

const options = {
    uri: 'https://bibleapi.co/api/verses/nvi/sl/23',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

rp(options).then((repos) => {
    console.log(repos.verses[1].text);
}).catch(function (err) {
    // API call failed...
});
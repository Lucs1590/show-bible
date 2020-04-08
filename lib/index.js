const rp = require('request-promise');

const options = {
    uri: 'https://bibleapi.co/api/verses/nvi/random',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

rp(options).then((repos) => {
    const result = repos.text.concat('\n', repos.book.abbrev.pt, '-', repos.chapter, ':', repos.number);
    console.log(result);
}).catch((err) => {
    // API call failed...
    console.error('Aconteceu algum erro, desculpe!')
});
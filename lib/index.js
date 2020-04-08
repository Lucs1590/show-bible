const rp = require('request-promise');

const options = {
    uri: 'https://bibleapi.co/api/verses/nvi/random',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

rp(options).then((repos) => {
    const result = repos.text.replace('"', '').concat('\n', repos.book.name, ' ', repos.chapter, ':', repos.number);
    console.clear();
    console.log('\n');
    console.log(result);
    console.log('\n');
}).catch((err) => {
    // API call failed...
    console.error('Aconteceu algum erro, desculpe!')
});
var Twit = require('twit');
var config = require('./twit-config')

var T = new Twit(config)
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function (err, data, response) {
//     for (let index = 0; index < data.statuses.length; index++) {
//         console.log(data.statuses[index].text)
//     }
// })
function callback(err, data, response) {
    console.log(data.errors)
}

function postIt() {
    var rand = Math.floor(Math.random() * 100)
    T.post('statuses/update', { status: 'my lucky number is: ' + rand }, callback)
    console.log(rand)
}

setInterval(() => {
    postIt()
}, 1000 * 5);

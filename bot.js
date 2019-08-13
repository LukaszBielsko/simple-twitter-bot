const Twit = require('twit');
const config = require('./twit-config')
const fetch = require('node-fetch')

const T = new Twit(config)

async function postIt(data) {
    console.log(data)
    data ? T.post('statuses/update', { status: data }) : console.log('no data')
}

async function getDataAndPostIt() {
    const response = await fetch('https://api.quotable.io/random')
    const json = await response.json()
    await postIt(json.content)
}

setInterval(getDataAndPostIt, 1000 * 60)

// getDataAndPostIt()



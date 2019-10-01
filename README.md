# simple-twitter-bot
incredibly simple node twitter bot

# install instruction
1. Clone or download
2. `npm install`
3. Create twitter account.
4. Apply for dev accout on twitter
5. Set up your application on dev.twitter.com
6. Get your tokens
7. Create file **twit-config.js** open it and add this code:
    ```
    module.exports = {
    consumer_key: 'Please insert yours consumer_key',
    consumer_secret: 'Please insert yours consumer_secret',
    access_token: 'Please insert yours access_token',
    access_token_secret: 'Please insert yours access_token_secret',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
    }
    ```
8. `npm start` to start locally or deploy to heroku (or sth else)
9. Wait for 3 hours (or longer, or shorter - it's up to your settings) and check your twitter dashboard 😆

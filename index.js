const Telegraf = require('telegraf');
const Twit = require('twit');

const telegramBot = new Telegraf('TELEGRAM_BOT_TOKEN');
const twitterClient = new Twit({
  consumer_key: 'TWITTER_CONSUMER_KEY',
  consumer_secret: 'TWITTER_CONSUMER_SECRET',
  access_token: 'TWITTER_ACCESS_TOKEN',
  access_token_secret: 'TWITTER_ACCESS_TOKEN_SECRET'
});

telegramBot.on('text', (ctx) => {
  // Periksa update dari channel Telegram
  // ...

  // Lakukan repost ke Twitter
  twitterClient.post('statuses/update', { status: ctx.message.text }, function(err, data, response) {
    console.log(data);
  });
});

telegramBot.launch();

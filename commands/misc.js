var request = require('request');


function poke(message, bot)
{
  var person = bot.users.get(message.mentions.users.first().id);
  person.send("Beep boop, I'm a cat");
}


module.exports = {poke};

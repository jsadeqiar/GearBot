var request = require('request');

module.exports = 
{
    name: 'avatar',
    description: 'sends you or a user the mentioned id avatar',
    execute(message, args, bot, Discord)
    {
        var person = bot.users.get(message.author.id)
        if(message.content !== '^avatar')
        {
            try
            {
            var target = bot.users.get(message.mentions.users.first().id)
            }
            catch(error)
            {
                console.error(error);
                return message.channel.send("Invalid input, mention user, `^avatar @user#0000`");
            }
            person.send(target.avatarURL)
        } 
        else
        {
            person.send(person.avatarURL)
        }    
    },
};
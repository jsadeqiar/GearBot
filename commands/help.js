var request = require('request');

module.exports =
{
    name: 'help',
    description: 'a help command',
    execute(message, args, bot, Discord)
    {
        var catbotid = bot.users.get('583493158034341888');
        var help = new Discord.RichEmbed()
        .setTitle("GEAR BOT")
        //.setDescription("prefix: !")
        .addField("commands:", '!gear <ap> <aap> <dp> <class> \n!gear <@user>')
        .setFooter("*work in progress*")
        .setColor(0xEF47EF)
        .setThumbnail(catbotid.avatarURL)

        message.channel.send(help);
    },
};

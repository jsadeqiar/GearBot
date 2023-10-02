const Discord = require('discord.js');
const bot = new Discord.Client();
const {get} = require('fetch');
var request = require('request');
var fun = require('./commands/misc');
const fs = require ('fs');
const PREFIX = '!';
const mongoose = require("mongoose");
var uri = 'MONGO_DB ATLAS URL HERE';
mongoose.connect(uri);

bot.commands = new Discord.Collection(); //creates a collection of command types
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //array of all file names in the command dir.

for(const file of commandFiles) //loops through the array of file names
{
  const command = require(`./commands/${file}`); //requires the file for each command
  bot.commands.set(command.name, command); //adds the command and the associated file to the collection
  //console.log(bot.commands);
}



bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
 bot.user.setActivity('with rocks!');
 });



bot.on('message', message => {
  //if (!message.content.startsWith(PREFIX) || message.author.bot) return;  //if no prefix, skip message (return)


  const args = message.content.slice(PREFIX.length).split(' '); // ^avatar @me#0000 => args: avatar @me#0000
  const command = args.shift().toLowerCase(); // ^avatar @me#0000 => command: avatar

  //if(!bot.commands.has(command)) return; //if command isn't found in the collection, skip message (return)

  if(bot.commands.has(command))
  {
  try
  {
    bot.commands.get(command).execute(message, args, bot, Discord); // "else" case, gets command from collection with associated file and executes commmand
  }
  catch(error)
  {
    console.error(error);
    message.reply("couldn't find command");
  }
  }

  //test 5

});



bot.login('DISCORD BOT TOKEN HERE');

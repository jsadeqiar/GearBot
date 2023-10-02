var request = require('request');
const mongoose = require("mongoose");
var classInfoArray = require("./classInfo");
var PlayerInfo = require("../models/PlayerInfo");

//test
module.exports =
{
  name: 'gear',
  description: 'registers and stores users gear information to the database',
  async execute(message, args, bot, Discord)
  {
    var discordID = message.author.id;
    var person = message.author.tag;

    var ap;
    var aap;
    var dp;
    var bdoClass = "";

    var color;
    var urlIndex;
    var gearSS = "";

    if(message.mentions.users.size > 0 || message.content.trim() == "!gear"){
      var mentionID = discordID;
      var mentionTag = person;
      
      if(message.mentions.users.size > 0)
      {
        mentionID = message.mentions.users.first().id;
        mentionTag = message.mentions.users.first().tag;
      }

      var res = await PlayerInfo.findOne({discordID: mentionID}).exec();
      if(!res)
      {
          message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("User not found in database."));
          return;
      }
      if(res.username != mentionTag)
      {
          res.username = mentionTag;
          res.save();
      }
        ap = res.AP;
        aap = res.AAP;
        dp = res.DP;
        bdoClass = res.bdoClass.toLowerCase();
        gearSS = res.gearSS;
        person = res.username;

        //get class info
        var classFound = false;
        for(i = 0; i < classInfoArray.length; i++)
        {
            var currentClassInfo = classInfoArray[i];
            if(currentClassInfo.name.toLowerCase() == bdoClass || currentClassInfo.alias.toLowerCase() == bdoClass)
            {
            bdoClass = currentClassInfo.name;
            color = currentClassInfo.color;
            urlIndex = currentClassInfo.urlIndex;
            classFound = true;
            break;
            }
        }
        if(!classFound){
            message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("Must enter a valid class!"));
            return;
        }
    }
    else{
        //parse message
        var messageTrimmed = message.content.trim();
        const block = messageTrimmed.split(' ');
        var currentWord = 0;
        for(i = 0; i < block.length; i++)
        {
          if(block[i].length == 0)
          {
            continue;
          }

          if(currentWord == 0)
          {
            currentWord++;
          }

          else if(currentWord == 1)
          {
            currentWord++;
            var num = parseInt(block[i], 10);
            if(!num)
            {
              message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("AP must be a number!"));
              return;
            }
            ap = num;
          }

          else if(currentWord == 2)
          {
            currentWord++;
            var num = parseInt(block[i], 10);
            if(!num)
            {
              message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("AAP must be a number!"));
              return;
            }
            aap = num;
          }

          else if(currentWord == 3)
          {
            currentWord++;
            var num = parseInt(block[i], 10);
            if(!num)
            {
              message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("DP must be a number!"));
              return;
            }
            dp = num;
          }

          else if(currentWord >= 4)
          {
            bdoClass += block[i] + " ";
          }
        }
        bdoClass = bdoClass.trim().toLowerCase();

        //get gear info
        var classFound = false;
        message.attachments.forEach(attachment =>{
            if(gearSS == "")
            {
                if(attachment.height > 0 && attachment.width > 0)
                {
                    gearSS = attachment.url;
                }
            }
        });
        for(i = 0; i < classInfoArray.length; i++)
        {
            var currentClassInfo = classInfoArray[i];
            if(currentClassInfo.name.toLowerCase() == bdoClass || currentClassInfo.alias.toLowerCase() == bdoClass)
            {
            bdoClass = currentClassInfo.name;
            color = currentClassInfo.color;
            urlIndex = currentClassInfo.urlIndex;
            classFound = true;
            break;
            }
        }
        if(!classFound){
            message.channel.send(new Discord.RichEmbed().setTitle("Error").setDescription("Must enter a valid class!"));
            return;
        }

        //update/create entry in database
        var res = await PlayerInfo.findOne({discordID: discordID}).exec();
        if(!res){res = new PlayerInfo;}
        else
        {
          if(gearSS == "")
          {
            gearSS = res.gearSS;
          }
        }

        res.AP = ap;
        res.AAP = aap;
        res.DP = dp;
        res.bdoClass = bdoClass;
        res.discordID = discordID;
        res.username = person;
        if(gearSS != "")
        {
          res.gearSS = gearSS;
        }
        res.save();

  }

    var classIcon = 'https://bdocodex.com/images/skillcalc/class_' + urlIndex + '.png';

    var gearcmd = new Discord.RichEmbed()
    .setTitle(bdoClass)
    .setDescription(person)
    .addField("AP ", ap, true)
    .addField("AAP ", aap, true)
    .addField("DP ", dp, true)
    //.setFooter("gear set!")
    .setColor(color)
    .setThumbnail(classIcon);
    if(gearSS != "")
    {
        gearcmd.setImage(gearSS);
    }

    message.channel.send(gearcmd);

      },
};
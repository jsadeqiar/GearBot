# Discord Gear Bot

A discord bot with many built-in commands, primarily used to store users character information from the game Black Desert Online for easy lookup by others at any time.

# Description

This program utilizes a JavaScript library (Discord.js) for the bot to interact with Discord's API to read and send messages to channels.

Node.js is used to run the JavaScript in the backend as well as MongoDB being used as the database to store users inputted information

# How to build

Ensure you have a valid discord bot account set up.

Set up an environment variable for your MongoDB atlas url and input it at the top of the ```index.js``` file.

Set up an environment variable for your bots login token and input it at the bottom of the ```index.js``` file.

The bot can then be brought online with the following command:
```nodemon --inspect index.js```

# Authors

[@jsadeqiar](https://github.com/jsadeqiar)

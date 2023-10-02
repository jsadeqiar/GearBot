var request = require('request');

module.exports =
{
    name: 'cat',
    description: 'sends a random picture of a cat from the API below',
    execute(message)
        {
        request('http://aws.random.cat/meow', function (error, response, body)
        {
          if (!error && response.statusCode === 200)
        {
          var json = JSON.parse(body);
          message.channel.send({ files: [json.file]});
          console.log(json);
        }
       else
        {
          message.channel.send('Bad request to cats...');
        }
    });
},
};

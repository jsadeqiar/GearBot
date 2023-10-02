var request = require('request');

module.exports =
{
   name: 'dog',
   description: 'sends a random picture of a dog from the API below',
   execute(message)
   {
    request('https://random.dog/woof.json', function(error, response, body)
    {
        if(!error && response.statusCode === 200)
        {
            var json = JSON.parse(body);
            message.channel.send({ files: [json.url]});
            console.log(json);
        }
        else
        {
            message.channel.send('Bad request to dogs...');
        }
    });
   },
};

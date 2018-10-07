const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.login(config.token).then(() => {
  client.on('message', message => {
    if (message.cleanContent.startsWith('!bam')) {
      message.channel.send({
        files: [
          {
            attachment: 'https://cdn.discordapp.com/attachments/456818557519659011/496761562850131978/unknown.png',
            name: 'bam.png'
          }
        ]
      })
    }
  })
})

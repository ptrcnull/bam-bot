const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.login(config.token).then(() => {
  console.log('Logged in!')
  client.user.setActivity('for !bam', { type: 'WATCHING' })
  client.on('message', message => {
    if (message.cleanContent.startsWith('!bam')) {
      console.log('"!bam" received!')
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

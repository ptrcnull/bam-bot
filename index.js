const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN).then(() => {
  console.log('Logged in!')
  client.user.setActivity('for !bam', { type: 'WATCHING' })
  client.on('message', message => {
    if (message.cleanContent.startsWith('!bam')) {
      console.log('"!bam" received!')
      message.channel.send({
        files: [
          {
            attachment: 'https://static.bjorn.ml/lgtbam.png',
            name: 'bam.png'
          }
        ]
      })
    }
  })
})

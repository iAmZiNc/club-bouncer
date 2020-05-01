// ------------------------------------------- CLIENT ------------------------------------------ //

const { Client: discordClient } = require('discord.js') // require discord Client
const client = new discordClient() // create our client instance

// ------------------------------------- SETUP / UTILITIES ------------------------------------- //

// utils
require('./utils/globalProperties')(client) // global variables
require('./utils/commandManager')(client) // commands
require('./utils/databaseManager')(client) // database manager

// prototype extensions
require('./prototypes/MessageEmbed')(client)

// ------------------------------------------- EVENTS ------------------------------------------ //

client.on('ready', () => require('./events/ready')(client))
client.on('message', () => require('./events/message'))
client.on('messageUpdate', () => require('./events/messageUpdate'))
client.on('guildMemberAdd', () => require('./events/guildMemberAdd'))
client.on('guildCreate', () => require('./events/guildCreate'))
client.on('guildDelete', () => require('./events/guildDelete'))

// ------------------------------------------- LAUNCH ------------------------------------------ //

const { token } = require("./auth.json")
client.login(token)
// ---------------------------------------- INCLUDES --------------------------------------- //

const { ShardingManager } = require('discord.js') // require discord.js sharding manager
const { token } = require("./auth.json") // require login token

// ----------------------------------------- LAUNCH ---------------------------------------- //

const manager = new ShardingManager('./main.js', {
    totalShards: 'auto',
    token: token
})

// spawn our shards
manager.spawn()

// ----------------------------------------- EVENTS ---------------------------------------- //

// shard created
manager.on('shardCreate', (shard) => {
    setTimeout(() => console.log(`Launched shard ${shard.id}\n`), 1500)
})

// event messages
manager.on('message', (shard, message) => {
    console.log(`Shard [${shard.id}] : ${message._eval} : ${message._result}`)
})
const { readdir } = require('fs')

module.exports = (client) => {
    client.commandManager.load = () => {
        readdir(`./commands`, (err, files) => {
            files.forEach((f) => {
                try {
                    // get the command file
                    const commandIn = require(`../commands/${f}`)

                    // add the command to the collection
                    client.commands.set(commandIn.info.name, commandIn)

                    // load in any aliases
                    commandIn.config.aliases.forEach((thisAlias) => client.aliases.set(thisAlias, commandIn.info.name))
                } catch (e) {
                    console.error(e)
                }
            })
        })
    }
}
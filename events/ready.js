module.exports = async (client) => {
    // just something nice to look at
    const header = '\n-------------------------------------------------------------\n'
    const footer = '----------------------- CLUB BOUNCER ------------------------\n\n'

    // console build info
    if (client.shard.ids[0] === 0) console.log(header)
    if (client.shard.ids[0] === 0) client.logging.console(client.settings.build)
    client.logging.console(`Started in ${client.guilds.cache.size} server(s)`)

    // load commands if we haven't already
    if (!client.settings.loadComplete) {
        try { await client.commandManager.load() }
        catch (e) { return client.logging.console(`Issue with loading commands: ${e}`) }

        client.logging.console(`Commands loading, logging in`)
        client.settings.loadComplete = true
    }

    // close out console logging on last shard
    if (client.shard.ids[0] === client.shard.count - 1) console.log(footer)

    // set status message
    await client.user.setActivity(client.settings.statusMessage, { type: 'WATCHING' })
}
module.exports = async (message) => {
    if (message.author.bot) return // kill loops
    if (message.system) return // ignore system messages
    if ([ 'dm', 'group' ].includes(message.channel.type)) return // ignore DM's

    // some constants to make things easier later
    const channel = message.channel
    const guild = message.guild

    // get server settings from db
    const settings = await client.sql.getSettings(guild.id)

    // testing
    console.log(settings)
    console.log(true)
}
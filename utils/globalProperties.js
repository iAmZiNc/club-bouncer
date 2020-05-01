// modules and auth
const { MessageEmbed, Collection, Guild, Role, TextChannel } = require('discord.js')

module.exports = (client) => {
    Object.assign(client, {
        // discord.js structures
        djs: {
            embed: MessageEmbed,
            collection: Collection,
            guild: Guild,
            role: Role,
            textChannel: TextChannel
        },

        // utilities
        modules: {
            moment: require('moment')
        },

        // colors
        colors: {
            red: "0xff0000",
            orange: "0xff9900",
            yellow: "0xffff00",
            green: "0x33cc33",
            blue: "0x0000ff",
            purple: "0xcc0099",
            black: "0x000000",
            white: "0xffffff",
            grey: "0x99AAB5",
            discordDark: "0x23272A",
            discordBG: "0x36393E",
            discordBlurple: "0x7289DA"
        },

        // project settings
        settings: {
            consolePrefix: `-- CB -- | S${client.shard.ids[0]} | `,
            build: 'PRODUCTION',
            statusMessage: 'the door',
            prefix: 'cb+',
            loadComplete: false
        },

        // command manager
        commandManager: {},
        commands: new Collection(),
        aliases: new Collection(),

        // add a couple other things
        logging: {}
    })

    // --- add a couple other things --- //

    // logging
    client.logging.console = (contents) => console.log(client.settings.consolePrefix + `[${client.modules.moment().format('MM-DD HH:mm:ss')}] ` + contents + `\n`)
}
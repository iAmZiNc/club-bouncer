module.exports = (client) => {
    // simple field methods
    client.djs.embed.prototype.addField = function (n, v, i) { return this.addFields({ name: n || ("\u200B"), value: v || ("\u200B"), inline: i || (false) }) }
    client.djs.embed.prototype.addBlank = function (i) { return this.addFields({ name: "\u200B", value: "\u200B", inline: i || (false) }) }
}
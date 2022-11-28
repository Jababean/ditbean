const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
    async execute(interaction) {
        await interaction.reply({content: 'Pong!', fetchReply: true }).then(msg => {
            let time = msg.createdTimestamp - interaction.createdTimestamp;
            
            msg.edit(`${msg.toString()} \`${time} ms\``);
            console.log(`\tPing took ${time} ms`);
        });
    }
}

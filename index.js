const { Client, IntentsBitField, Partials } = require("discord.js");
require("dotenv/config");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
    function send() {
        client.channels.cache.get("1102124637774692382").send("<@903813670927216751>");
    }
    setInterval(send, 5000);
});

client.login(process.env.TOKEN);
module.exports = async client => {
  // Manually send stats to DiscordBotList.com and Bots On Discord like some techinically illiterate moron
  if (!client.statstimer) {
    client.statstimer = setInterval( () => {
      if (client.config.dblcomtoken) client.dblcomStats(client.config.dblcomtoken);
      if (client.config.bodtoken) client.bodStats(client.config.bodtoken);
      if (client.config.dbggtoken) client.dbggStats(client.config.dbggtoken);
    }, 5 * 60 * 1000);
  }

  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.cache.size} users in ${client.guilds.cache.size} servers.`, "ready");
};

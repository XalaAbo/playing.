const { Client, Intents } = require('discord.js');
const express = require("express");
const client = new Client({ intents: [
Intents.FLAGS.GUILDS, 
] 
  });




client.on('ready', async () => { console.log(`The`,client.user.tag,`is Online`);})

client.on('ready', async () => {
client.user.setPresence({status: "Idle" } )
client.user.setActivity( {type: "PLAYING", url: "https://www.twitch.tv/@#£"}, {name: "Under Development By Dream server "} ) 

   })
   
client.login("ODAyOTI3NTMzMDcwMzUyNDI1.GKt6Lz.7H9DeI4tooOBb5lDoUq0cTjTl8yW3FOQZ-tWtQ")

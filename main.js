const Discord = require('discord.js');
const client = new Discord.Client();

client.login('Nzk2Mzc2MDIwMjI2OTMyNzk2.X_XA9w.YPC0FmOcEm5PhOXGEQXxAeCw_UM');

client.on('ready', readyDiscord)

function readyDiscord() {
    console.log('im working')
}

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'senate') {
      msg.reply('Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'joke') {
      msg.reply("Don't talk like one of them, you're not! Even if you'd like to be. To them, you're just a freak – like me! They need you right now, but when they don't... they'll cast you out. Like a tiger. See, their morals, their code: it's a bad joke. Dropped at the first sign of trouble. They're only as good as the world allows them to be. I'll show you. When the chips are down, these, uh… these civilized people, they'll eat each other. See, I'm not a monster; I'm just ahead of the curve. Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it. You know, I just... do things. The mob has plans, the cops have plans, Gordon's got plans. You know, they're schemers. Schemers trying to control their little worlds. I'm not a schemer. I try to show the schemers how pathetic their attempts to control things really are.");
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '84') {
    msg.reply("Welcome to the future. Life is good! But it can be better. And why shouldn't it be? All you need is to want it. Think about finally having everything you always wanted.");
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'why') {
    msg.reply("Why are we still here? Just to suffer? Every night, I can feel my leg... And my arm... even my fingers... The body I've lost... the comrades I've lost... won't stop hurting... It's like they're all still there. You feel it, too, don't you? I'm gonna make them give back our past!");
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kane') {
    msg.reply("Six years ago, I looked at a picture of the world's greatest newspaper men. I felt like a kid in front of a candy store. Well, tonight, six years later, I got my candy -- all of it. Welcome, gentlemen, to the Inquirer! Make up an extra copy of that picture and send it to the Chronicle, will you please? It'll make you all happy to learn that our circulation this morning was the greatest in New York, 684,000.");
  }
});
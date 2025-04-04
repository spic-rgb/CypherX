
const fetch = require('node-fetch');

module.exports = {
  command: ['jokes', 'joke'],
  operate: async ({ Cypher, m, reply }) => {
    try {
      let res = await fetch("https://api.chucknorris.io/jokes/random");
      let json = await res.json();
      await Cypher.sendMessage(m.chat, { text: json.value }, { quoted: m });
    } catch (error) {
      console.error('Error fetching joke:', error);
      reply('An error occurred while fetching a joke.');
    }
  }
};
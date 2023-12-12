import 'dotenv/config'
import utils from "./lib/utils.js";
import charAi from "./lib/charai.js"

export default async function (sock, message) {
  const senderNumber = message.key.remoteJid;
  const textMessage =
    message.message.conversation ||
    (message.message.extendedTextMessage &&
      message.message.extendedTextMessage.text) ||
    (imageMessage && imageMessage.caption) ||
    (videoMessage && videoMessage.caption);


  const characterId = process.env.CHARACTER_ID || "yPJVhUgjK8M3g2bCOwFHtbN9n4Bqg7uXdydC-Li_T1I"; 
  const userMessage = textMessage;
  console.log(senderNumber, ": ", userMessage)
  
  charAi
    .sendMessage(characterId, userMessage)
    .then((response) => {

      console.log("AI:", response.text);
      utils.sendText(response.text, senderNumber)
    })
    .catch((err) => {
      console.error(err);
    });
}

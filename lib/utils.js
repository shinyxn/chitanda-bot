import { sock } from "../index.js";

const sendText = async (text, senderNumber) => {
        await sock.sendMessage(
      senderNumber,
      { text: text }
    );
}

const utils = {
    sendText
};

export default utils;
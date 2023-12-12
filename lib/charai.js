import 'dotenv/config'
import CharacterAI from "node_characterai"

class CharacterAiHandler {
  constructor() {
    this.characterAI = new CharacterAI();
    this.initialized = false;
  }

  async initialize() {
    if (!this.initialized) {
      await this.characterAI.authenticateWithToken(process.env.CHARAI_TOKEN);
      this.initialized = true;
    }
  }

  async createOrContinueChat(characterId) {
    await this.initialize();
    return this.characterAI.createOrContinueChat(characterId);
  }

  async sendMessage(characterId, message) {
    await this.initialize();
    const chat = await this.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse(message, true);
    return response;
  }
}

const charAi = new CharacterAiHandler();
export default charAi;

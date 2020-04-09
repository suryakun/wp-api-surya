import { MessageRepoInterface } from '../repositories/message.repo'
import Message, { MessageInterface } from '../models/message.model'
import { logger } from '../utils/logger'

export default class MessageService {
    private messageRepo : MessageRepoInterface;
    constructor(messageModel : MessageRepoInterface) {
        this.messageRepo = messageModel
    }

    addNewMessage(msg: string) : MessageInterface {
        try {
            if(!msg.length) throw new Error("Message empty");
            const message = new Message(msg, new Date());
            this.messageRepo.add(message)
            return message;
        } catch(err) {
            logger.error(err)
        }
    };

    getAllMessages() : MessageInterface[] {
        return this.messageRepo.getAll()
    }
}

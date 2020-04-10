import { MessageRepoInterface } from '../repositories/message.repo'
import Message, { MessageInterface } from '../models/message.model'
import { logger } from '../utils/logger'

export interface MessageServiceInterface {
    addNewMessage(str: string) : MessageInterface;
    getAllMessages() : MessageInterface[];
}

export default class MessageService {
    private messageRepo : MessageRepoInterface;
    constructor(messageModel : MessageRepoInterface) {
        this.messageRepo = messageModel
    }

    addNewMessage(msg: string) : MessageInterface {
        try {
            if(!msg || !msg.length)
            {
                throw new Error("Message empty")
            }
            const message = new Message(msg, new Date());
            this.messageRepo.add(message)
            return message;
        }catch(err) {
            logger.error("Message Empty")
            return null
        }
    };

    getAllMessages() : MessageInterface[] {
        return this.messageRepo.getAll()
    }
}

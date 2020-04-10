import WebSocket from 'ws'
import { MessageRepoInterface } from '../repositories/message.repo'
import Message, { MessageInterface } from '../models/message.model'
import { logger } from '../utils/logger'
import { socket } from '../index'

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
            if(msg === "")
            {
                throw new Error("Message empty")
            }
            const message = new Message(msg, new Date());
            const result = this.messageRepo.add(message)
            socket.clients.forEach((client: any) => {
                client.send(JSON.stringify(result))
            })
            return result;
        }catch(err) {
            logger.error(err)
            return null
        }
    };

    getAllMessages() : MessageInterface[] {
        return this.messageRepo.getAll()
    }
}

import { MessageInterface } from '../models/message.model'

export interface MessageRepoInterface {
    add(message: MessageInterface) : MessageInterface;
    getAll() : MessageInterface[];
}

export default class MessageRepo implements MessageRepoInterface {
    private messages: MessageInterface[] = []

    add(message: MessageInterface) : MessageInterface {
        const id = this.messages.length + 1
        message.id = id
        this.messages.push(message)
        return message
    }

    getAll() : MessageInterface[] {
        return this.messages
    }
}

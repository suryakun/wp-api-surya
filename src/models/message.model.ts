export interface MessageInterface {
    id: number;
    message: string;
    createdAt?: Date;
}

export default class Message implements MessageInterface {
    public id: number
    public message: string
    public createdAt: Date
    constructor(message: string, createdAt: Date) {
        this.message = message
        this.createdAt = createdAt
    }
}

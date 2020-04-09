import { Request, Response } from "express"
import MessageModel from "../../models/message.model"

export default class MessageController {

    async getMessages(req: Request, res: Response) : Promise<void> {
        res.status(200).send({messages: []})
    }
}

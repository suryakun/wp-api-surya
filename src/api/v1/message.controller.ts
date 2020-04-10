import { Request, Response } from "express"
import Message from "../../models/message.model"
import { MessageServiceInterface } from '../../services/message.service'
import { logger } from '../../utils/logger'

export default class MessageController {
    private service : MessageServiceInterface

    constructor(svc: MessageServiceInterface) {
        this.service = svc
    }

    addNewMessage = async (req: Request, res: Response) : Promise<void> => {
        try {
            const message = this.service.addNewMessage(req.body.message)
            if(!message) { throw new Error("Message Empty") }
            res.status(201).send({message})
        } catch(err) {
            logger.error(err)
            res.status(400).send({error: err.message})
        }
    }

    getMessages = async (req: Request, res: Response) : Promise<void> => {
        try {
            const messages = this.service.getAllMessages()
            res.status(200).send({messages})
        } catch(err) {
            logger.error(err)
            res.status(500).send(err.message)
        }
    }

}

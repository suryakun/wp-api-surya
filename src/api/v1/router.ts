import express, { Request, Response } from "express"
import MessageController from "./message.controller"
import MessageService from '../../services/message.service'
import MessageRepo from '../../repositories/message.repo'


export const router = express.Router()
const repo = new MessageRepo()
const service = new MessageService(repo)
const message = new MessageController(service)

router.get("/messages", message.getMessages)
router.post("/messages", message.addNewMessage)

export default router

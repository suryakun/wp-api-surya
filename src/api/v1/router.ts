import express, { Request, Response } from "express"
import MessageController from "./message.controller"

export const router = express.Router()
const message = new MessageController()

router.get("/messages", message.getMessages)

export default router

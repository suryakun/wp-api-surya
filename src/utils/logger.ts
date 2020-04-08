import pino from 'pino'
import dotenv from 'dotenv'

dotenv.config()

export const logger = pino({
    name: process.env.APP_NAME,
    level: process.env.DEBUG_LEVEL,
    prettyPrint: true
})

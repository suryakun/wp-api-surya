import pino from 'pino'
import dotenv from 'dotenv'

dotenv.config()
const env : string[] = ["development", "staging", "production"]

export const logger = pino({
    name: process.env.APP_NAME,
    level: process.env.DEBUG_LEVEL,
    prettyPrint: true,
    enabled: env.includes(process.env.ENV)
})

import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import loaders from './loaders/index'
import { logger } from './utils/logger'
import routerV1 from './api/v1/router'

dotenv.config()

class Server {
    public readonly port: string;
    private app: express.Application;
    private server: http.Server;

    constructor(PORT: string) {
        this.port = PORT
        this.createApp()
        this.createRouters()
        this.createServer()
        this.sockets();
        this.listen()
    }

    private createApp(): void {
        this.app = express()
        loaders(this.app)
    }

    private createRouters(): void {
        this.app.use("/v1", routerV1 )
    }

    private createServer(): void {
        this.server = http.createServer(this.app)
    }

    private sockets(): void {
        logger.info("socket")
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            logger.info(`Server running at Port ${this.port}`)
        })
    }

    public getAppServer() : express.Application {
        return this.app
    }
}

const app = new Server(process.env.SERVER_PORT).getAppServer()
export default app

import express from 'express'
import loaders from './loaders/index'
import dotenv from 'dotenv'
import { logger } from './utils/logger'
import routerV1 from './api/v1/router'

dotenv.config()

export function startServer() : express.Application {
    const app = express();
    loaders(app);

    app.use("/v1", routerV1)

    app.listen(process.env.SERVER_PORT, err => {
        if (err) {
            logger.error(err)
            return;
        }
        logger.info(`Service is running`)
    });
    return app
}

if(process.env.npm_lifecycle_event !== "test") {
    startServer()
}

import express from 'express'
import loaders from './loaders/index'
import dotenv from 'dotenv'
import { logger } from './utils/logger'
import routerV1 from './api/v1/router'

dotenv.config()
const app = express();

function startServer() : express.Application {
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

startServer()

export default app

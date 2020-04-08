import express from 'express'
import loaders from './loaders/index'
import dotenv from 'dotenv'

dotenv.config()

function startServer() : express.Application {
    const app = express();
    loaders(app);

    app.listen(process.env.SERVER_PORT, err => {
        if (err) {
            return;
        }
    });
    return app
}

export default startServer


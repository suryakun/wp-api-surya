import express from 'express'
import loaders from './loaders/index.js'

require('dotenv').config()

async function startServer() {
    const app = express();
    await loaders({ expressApp: app  });

    app.listen(process.env.SERVER_PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is running at port: ${process.env.SERVER_PORT}`);
    });
}

startServer();

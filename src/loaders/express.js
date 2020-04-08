import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default async ({ app  }) => {

    app.get('/health', (req, res) => { res.status(200).send({status: "OK"});  });
    app.head('/health', (req, res) => { res.status(200).end();  });
    app.enable('trust proxy');

    app.use(cors());
    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false  }));

}

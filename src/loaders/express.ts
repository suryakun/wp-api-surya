import {Application, Request, Response} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import expressPinoLogger from 'express-pino-logger'
import { logger } from '../utils/logger'

export default (app: Application) => {
    app.use(cors());
    app.use(expressPinoLogger({logger}))
    app.use(bodyParser.urlencoded({ extended: false  }));

    app.get('/health', (req: Request , res: Response) => { res.status(200).send({status: "OK"});  });
    app.head('/health', (req: Request , res: Response) => { res.status(200).end();  });
    app.enable('trust proxy');
}

import { Application } from 'express'
import swaggerUI from 'swagger-ui-express'
const swaggerData : any = require('../../docs/swagger.json')

export default (app: Application) : void => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerData))
}

import chai from 'chai'
import sinonChai from 'sinon-chai'
import { mockReq, mockRes } from 'sinon-express-mock'
import loader from '../../loaders/express'
import { Application } from 'express'

chai.use(sinonChai)
const expect = chai.expect


describe("Loader express", () => {
    it("should ok when reqceive app", () => {
        const request = {
            id: 1,
            method: "GET",
            url: "/health"
        }

        const response = {
            statusCode: 200
        }

        const req = mockReq(request)
        const res = mockRes(response)

        const app = {req, res}
        // loader(app)

        // expect(res.json).to.be.calledWith({ status: "OK" })

    })
})

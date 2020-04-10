import request from 'supertest'
import app from '../../index'

describe("Heath", () => {
    describe("GET /health", () => {
        it("should return ok", done => {
            request(app)
                .get("/health")
                .expect(200, {status: "OK"}, done)
        })
    })
})

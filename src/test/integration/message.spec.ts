import request from 'supertest'
import chai from 'chai'
import app from '../../index'

const expect = chai.expect

describe("Message API", () => {
    describe("Test create and get messages", () => {
        it("should return ok", done => {
            request(app)
                .get("/v1/messages")
                .expect(200, {messages: []}, done)
        })

        it("should add new message", done => {
            request(app)
                .post("/v1/messages")
                .send({message: "Testing help"})
                .expect(201, done)
        })

        it("should error when received empty message", done => {
            request(app)
                .post("/v1/messages")
                .send({message: ""})
                .expect(400, done)
        })
    })
})

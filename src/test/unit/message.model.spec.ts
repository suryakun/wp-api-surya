import request from 'supertest'
import chai from 'chai'
import Message from '../../models/message.model'

const expect = chai.expect

describe("Message Model", () => {
    describe("Test instance model", () => {
        it("should return ok", done => {
            const msg = new Message("test", new Date())
            expect(msg.message).to.be.equal("test")
            done()
        })

    })
})

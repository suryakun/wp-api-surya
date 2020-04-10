import chai from 'chai'
import Message from '../../models/message.model'
import Service from '../../services/message.service'
import Repo from '../../repositories/message.repo'

const expect = chai.expect

const message = new Message("test1", new Date())
const repo = new Repo()

describe("Testing Service", () => {
    it("Service add new message", () => {
        const svc = new Service(repo)
        const msg = svc.addNewMessage("Testing1")
        expect(msg.message).to.be.equal("Testing1")
    })

    it("Service get all message", () => {
        const svc = new Service(repo)
        svc.addNewMessage("Testing1")
        svc.addNewMessage("Testing2")
        svc.addNewMessage("Testing3")
        const msgs = svc.getAllMessages()
        expect(msgs).to.have.lengthOf.above(0)
    })

    it("Service add empty message", () => {
        const svc = new Service(repo)
        const msg = svc.addNewMessage("")
        expect(msg).eql(null)
    })
})

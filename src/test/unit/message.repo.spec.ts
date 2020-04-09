import chai from 'chai'
import Message from '../../models/message.model'
import Repo from '../../repositories/message.repo'

const expect = chai.expect

const message = new Message("test1", new Date())

describe("Test Repositories", () => {
    it("Testing add new message", () => {
        const repo = new Repo()
        const msg = repo.add(message)
        expect(msg).to.be.equal(message)
    })

    it("Testing get all message", () => {
        const repo = new Repo()
        repo.add(message)
        repo.add(message)
        repo.add(message)
        const messages = repo.getAll()
        expect(messages.length).to.be.equal(3)
    })

    it("Testing get empty message", () => {
        const repo = new Repo()
        const messages = repo.getAll()
        expect(messages.length).to.be.equal(0)
    })
})

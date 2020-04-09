import chai from 'chai'
import chaiHttp from 'chai-http'
import { startServer } from '../../index'

chai.use(chaiHttp)
chai.should()

describe("Heath", () => {
    describe("GET /health", () => {
        it("should return ok", done => {
            chai.request(startServer())
                .get('/health')
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})

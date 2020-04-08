import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../index'

chai.use(chaiHttp)
chai.should()

describe("Heath", () => {
    describe("GET /health", () => {
        it("should return ok", done => {
            chai.request(app())
                .get('/health')
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})
